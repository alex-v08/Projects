package com.atuhome.turnos.repository;

import com.atuhome.turnos.Entitys.Geo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IGeoRepository extends JpaRepository<Geo, Long> {

    void create(Geo geo);

    void update(Geo geo);

    void delete(Geo geo);

    Geo findById(long id);

    Geo findByLatAndLng(String lat, String lng);


}