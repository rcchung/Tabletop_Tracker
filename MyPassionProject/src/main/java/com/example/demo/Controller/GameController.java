package com.example.demo.Controller;

import com.example.demo.Entity.Game;
import com.example.demo.Service.GameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Collection;

@RestController
@CrossOrigin(origins = {"http://localhost:8080","http://localhost:8100"})
public class GameController {

    private GameService gameService;

    @Autowired
    public GameController(GameService gameService) {
        this.gameService = gameService;
    }

    @PostMapping(value="/games")
    public ResponseEntity<Game> addGame(@RequestBody Game game) {
        return gameService.addGame(game);

    }

    @GetMapping(value="/games")
    public ResponseEntity<Collection<Game>> getAllGames(){return new ResponseEntity<>(gameService.getAllGames(), HttpStatus.OK);}

    @GetMapping(value="/games/id/{gameId}")
    public ResponseEntity<Game> getGameById(@PathVariable Long gameId){return gameService.getGameById(gameId);}

    @GetMapping(value="/games/name/{gameName}")
    public Long getGameByName(@PathVariable String gameName){return gameService.getGameByName(gameName);}
}
