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
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ResponseBody;

import java.io.File;

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

  public ResponseEntity<User> updateUserProfile (User user, Long userId){
    User currentUser = userRepo.getOne(userId);
    if(user.getSummary()!=null) {
      currentUser.setSummary(user.getSummary());
    }
    if(user.getProfileName()!=null){
      currentUser.setProfileName(user.getProfileName());
    }
    return new ResponseEntity<>(userRepo.save(currentUser), HttpStatus.OK);
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

  public User findUserByUserName(String userName){
    return (userRepo.findByUserName(userName));
  }

//  public ResponseEntity<User> upload(File file){
//      User user = userRepo.getOne(1L);
//      user.setProfilePic(file);
//      return new ResponseEntity<>(userRepo.save(user), HttpStatus.OK);
//  }

}
