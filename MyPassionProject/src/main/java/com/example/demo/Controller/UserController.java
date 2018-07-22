package com.example.demo.Controller;

import com.example.demo.Entity.Game;
import com.example.demo.Entity.User;
import com.example.demo.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
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

  @PutMapping(value = "/users/{userId}/summary")
  public ResponseEntity<User> updateSummary(@RequestBody String newSummary, @PathVariable Long userId){
    return userService.updateUserSummary(newSummary, userId);
  }

  @PutMapping(value="/users/{userId}/profileName")
  public ResponseEntity<User> updateProfileName(@RequestBody String newName, @PathVariable Long userId){
      return userService.updateUserProfileName(newName,userId);
  }

  @DeleteMapping(value="/users/{userId}")
  public ResponseEntity<User> deleteUser(@PathVariable Long userId) {
    return userService.deleteUser(userId);
  }

  @PutMapping(value = "/users/{userId}/library")
    public ResponseEntity<User> updateGameLibrary(@RequestBody String gameId, @PathVariable Long userId){
      return userService.updateUserLibrary(Long.valueOf(gameId),userId);
  }
}
