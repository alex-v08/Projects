package com.dh.Clase8.repository;

import com.dh.Clase8.model.Partido;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PartidoRepository extends MongoRepository<Partido,Long> {


}
