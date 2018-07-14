package com.example.demo.Repository;

import com.example.demo.Entity.Game;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.http.ResponseEntity;

@RepositoryRestResource
public interface GameRepo extends JpaRepository<Game,Long> {

    @Query("select id from Game where name = :name")
    Long findByName(@Param("name")String name);
}
