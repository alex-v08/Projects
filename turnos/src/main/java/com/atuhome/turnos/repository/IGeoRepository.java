package com.atuhome.turnos.repository;

import com.atuhome.turnos.Entitys.Geo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface IGeoRepository extends JpaRepository<Geo, Long> {

    void create(Geo geo);

    void update(Geo geo);

    void delete(Geo geo);

    Optional<Geo> findById(Long id);

    Geo findByLatAndLng(String lat, String lng);


}
