package com.atuhome.turnos.repository;

import com.atuhome.turnos.Entitys.Client;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IClientRepository extends JpaRepository<Client, Long>
{
    void create(Client client);
    void update(Client client);

    void delete(Client client);

    Client findById(long id);

    Client findByDni(String dni);

}
