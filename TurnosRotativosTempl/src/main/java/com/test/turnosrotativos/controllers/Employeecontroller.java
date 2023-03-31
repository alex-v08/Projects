package com.test.turnosrotativos.controllers;


import com.test.turnosrotativos.entities.Employee;
import com.test.turnosrotativos.repository.EmployeeRepository;
import com.test.turnosrotativos.request.EmployeeRequest;
import com.test.turnosrotativos.service.EmployeeService;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.validation.Valid;
import java.util.List;

@Controller
@RequestMapping("/empleado")
public class Employeecontroller {

    static Logger logger = LogManager.getLogger(Employeecontroller.class);

    @Autowired
    EmployeeService employeeService;

    @Autowired
    EmployeeRepository employeeRepository;

    @GetMapping("/getEmployees")
    public List<Employee> getEmployees(){
        return employeeService.getEmployees();
    }

    @RequestMapping("/getEmployee/{id}")
    public Employee getEmployee(Integer id){
        return employeeService.getEmployee(id);
    }

    @PostMapping(value="/empleado", consumes = "application/json", produces = "application/json")
    public ResponseEntity<String> addEmployee(@Valid EmployeeRequest employee) {


        Employee newEmployee = new Employee();
        newEmployee.setName(employee.getName());
        newEmployee.setLastName(employee.getLastName());
        newEmployee.setDni(employee.getDni());
        newEmployee.getBirthDate(employee.getBirthDate());
        newEmployee.setHireDate(employee.getHireDate());
        newEmployee.getCreatedDate(employee.getCreatedDate());
        logger.info("addEmployee: " + employee);
        Employee employeeAdded = employeeRepository.save(newEmployee);
        return new ResponseEntity<>(String.valueOf(employeeAdded.getId()), HttpStatus.CREATED);



    }

}
