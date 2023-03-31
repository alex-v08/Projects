package com.test.turnosrotativos.repository;

import com.test.turnosrotativos.entities.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
@Transactional
public interface EmployeeRepository extends JpaRepository<Employee, Integer>{







}
