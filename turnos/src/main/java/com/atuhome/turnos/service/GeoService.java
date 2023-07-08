package com.atuhome.turnos.service;


import com.atuhome.turnos.Entitys.Geo;
import com.atuhome.turnos.repository.IGeoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GeoRepository {

    final IGeoRepository geoRepository;

    @Autowired
    public GeoRepository(IGeoRepository geoRepository) {
        this.geoRepository = geoRepository;
    }

    public void createGeo(Geo geo) {

        geoRepository.save(geo);

    }



    public void updateGeo(Geo geo) {

        if (geoRepository.findById(geo.getId()) != null) {
            createGeo(geo);
        }



    }

    public void deleteGeo(Long Id) {

        geoRepository.deleteById(Id);

    }



    public Geo findById(Geo geo) {

          return geoRepository.findById(geo.getId()).orElse(null);

    }

    public void findByLatAndLng() {



    }


}
