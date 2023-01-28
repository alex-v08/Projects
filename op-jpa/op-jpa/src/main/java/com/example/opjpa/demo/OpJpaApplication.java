package com.example.opjpa.demo;


import com.example.opjpa.repository.ClienteRepository;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
public class OpJpaApplication {

	public static void main(String[] args) {

	ApplicationContext context = SpringApplication.run(OpJpaApplication.class, args);
	ClienteRepository repositry = context.getBean(ClienteRepository.class);

		System.out.println(repositry.count());

		System.out.println(repositry.findAll());

	}

}
