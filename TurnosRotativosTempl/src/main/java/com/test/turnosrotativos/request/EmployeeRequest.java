package com.test.turnosrotativos.request;

import org.springframework.stereotype.Component;

import javax.validation.constraints.NotBlank;

@Component
public class EmployeeRequest {
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }



    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getDni() {
        return dni;
    }

    public void setDni(String dni) {
        this.dni = dni;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(String birthDate) {
        this.birthDate = birthDate;
    }

    public String getHireDate() {
        return hireDate;
    }

    public void setHireDate(String hireDate) {
        this.hireDate = hireDate;
    }

    public String getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(String createdDate) {
        this.createdDate = createdDate;
    }

    @NotBlank(message = "El nombre no puede estar vacio")
    private String name;
    @NotBlank(message = "El apellido no puede estar vacio")
    private String lastName;
    @NotBlank(message = "El dni no puede estar vacio")
    private String dni;
    @NotBlank(message = "El email no puede estar vacio")
    private String email;
    @NotBlank(message = "La fecha de nacimiento no puede estar vacia")
    private String birthDate;
    @NotBlank(message = "La fecha de ingreso no puede estar vacia")
    private String hireDate;
    @NotBlank(message = "La fecha de creacion no puede estar vacia")
    private String createdDate;

}
