package com.example.demo.Service;

import com.example.demo.Entity.Game;
import com.example.demo.Repository.GameRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class GameService {
    private GameRepo gameRepo;

    @Autowired

    public GameService(GameRepo gameRepo) {
        this.gameRepo = gameRepo;
    }

    public ResponseEntity<Game> addGame(Game game){
        return new ResponseEntity<>(gameRepo.save(game),HttpStatus.CREATED);
    }

    public ResponseEntity<Game> getGameById(Long id){
        return new ResponseEntity<>(gameRepo.findById(id).get(), HttpStatus.OK);
    }

    public Long getGameByName(String name){
        return gameRepo.findByName(name);
    }
}
