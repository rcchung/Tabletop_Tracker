package com.example.demo.Service;

import com.example.demo.Controller.GameController;
import com.example.demo.Entity.Game;
import com.example.demo.Entity.User;
import com.example.demo.Repository.GameRepo;
import com.example.demo.Repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Set;


@Service
public class UserService {
  private UserRepo userRepo;
  private GameController gameController;

  @Autowired
  public UserService(UserRepo userRepo, GameController gameController) {
    this.userRepo = userRepo;
    this.gameController = gameController;
  }

  public ResponseEntity<User> createUser (User user){
      return new ResponseEntity<>(userRepo.save(user), HttpStatus.CREATED);
  }

  public ResponseEntity<User> getUserById(Long id){
    return new ResponseEntity<>(userRepo.findById(id).get(), HttpStatus.CREATED);
  }

  public ResponseEntity<User> updateUserSummary (String newSummary, Long userId){
    User userToUpdate = userRepo.getOne(userId);
    userToUpdate.setSummary(newSummary);
    return new ResponseEntity<>(userRepo.save(userToUpdate), HttpStatus.OK);
  }

  public ResponseEntity<User> updateUserProfileName (String newName, Long userId){
    User userToUpdate = userRepo.getOne(userId);
    userToUpdate.setProfileName(newName);
    return new ResponseEntity<>(userRepo.save(userToUpdate), HttpStatus.OK);
  }

  public ResponseEntity deleteUser(Long id) {
    User deleteUser = userRepo.getOne(id);
    userRepo.delete(deleteUser);
    return new ResponseEntity<>(HttpStatus.OK);
  }

  public ResponseEntity<User> updateUserLibrary(Long gameId, Long userId) {
    User user = userRepo.getOne(userId);
    Game game = gameController.getGameById(gameId).getBody();
    user.addGames(game);
    return new ResponseEntity<>(userRepo.save(user), HttpStatus.OK);
  }
}
