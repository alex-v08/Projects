package com.dh.clinica;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.apache.log4j.*;

@SpringBootApplication
public class ClinicaOdontologicaApplication {

    public static void main(String[] args) {

        PropertyConfigurator.configure("clinica-odontologica-fix (1)/clinica-odontologica/log4j.properties");
        SpringApplication.run(ClinicaOdontologicaApplication.class, args);

    }

}
