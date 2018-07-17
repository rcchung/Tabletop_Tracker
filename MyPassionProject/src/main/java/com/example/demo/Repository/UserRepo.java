package com.example.demo.Repository;


import com.example.demo.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.Set;


@RepositoryRestResource
public interface UserRepo extends JpaRepository<User, Long> {
//    @Query("select id from user_game where user_id = :userId")
//    Set<Long> findUserGames(@Param("userId")Long userId);

}
