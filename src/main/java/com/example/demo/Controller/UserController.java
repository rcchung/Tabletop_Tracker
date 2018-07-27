package com.example.demo.Controller;

import com.example.demo.Entity.Game;
import com.example.demo.Entity.User;
import com.example.demo.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.File;

@RestController
@CrossOrigin//(origins = {"http://localhost:8080","http://localhost:8100"})
public class UserController {

  private UserService userService;

  @Autowired
  public UserController(UserService userService) {
    this.userService = userService;
  }

  @PostMapping(value="/users")
  public ResponseEntity<User> createUser(@RequestBody User user){return userService.createUser(user);}

  @GetMapping(value = "/users/{userId}")
  public ResponseEntity<User> getUserById(@PathVariable Long userId){
    return userService.getUserById(userId);
  }

  @PatchMapping(value = "/users/{userId}")
  public ResponseEntity<User> updateProfile(@RequestBody User user, @PathVariable Long userId){
    return userService.updateUserProfile(user, userId);
  }

  @DeleteMapping(value="/users/{userId}")
  public ResponseEntity<User> deleteUser(@PathVariable Long userId) {
    return userService.deleteUser(userId);
  }

  @PutMapping(value = "/users/{userId}/library")
    public ResponseEntity<User> updateGameLibrary(@RequestBody String gameId, @PathVariable Long userId){
      return userService.updateUserLibrary(Long.valueOf(gameId),userId);
  }

//    @PostMapping(value="/upload")
//    public ResponseEntity<User> upload(@RequestBody File file){return userService.upload(file);}
}
