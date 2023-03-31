package com.test.turnosrotativos.entities;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name = "empleados")
@ToString
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)@Getter @Setter
    private Integer id;
    @Column(name = "nombre", length = 30, nullable = false)@Getter @Setter
    @NotBlank(message = "El nombre no puede ser vacio")
    private String name;

    @Column(name = "apellido", length = 30, nullable = false)@Getter @Setter
    @NotBlank(message = "El apellido no puede ser vacio")

    private String lastName;
    @Column(name = "nro_documento", length = 30, nullable = false)@Getter @Setter
    @NotBlank(message = "El nro de documento no puede ser vacio")
    private String dni;
    @Column(name = "email", length = 30, nullable = false)@Getter @Setter
    @NotBlank(message = "El email no puede ser vacio")
    private String email;
    @Column(name = "fecha_nacimiento", length = 30, nullable = false)
    private String birthDate;
    @Column(name = "fecha_ingreso", length = 30, nullable = false)@Getter @Setter
    private String hireDate;
    @Column(name = "fecha_creacion", length = 30, nullable = false)
    private String createdDate;

    /*
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "employee", fetch = FetchType.LAZY)
    List<Employee> employees;*/

    public String getCreatedDate(String s) {
        return createdDate;
    }

    public void setCreatedDate(String createdDate) {
        this.createdDate = createdDate;
    }

    public String getBirthDate(String s) {
        return birthDate;
    }

    public void setBirthDate(String birthDate) {
        this.birthDate = birthDate;
    }
}
