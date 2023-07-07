package com.atuhome.turnos.repository;

import com.atuhome.turnos.Entitys.Company;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ICompanyRepository extends JpaRepository<Company, Long> {

    void create(Company company);

    void update(Company company);

    void delete(Company company);

    Company findById(long id);

    Company findByCuit(String cuit);


}
