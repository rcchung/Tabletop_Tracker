package com.example.demo.Controller;

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
  public ResponseEntity<User> createUser (@RequestBody User user){
    return userService.setUser(user);
  }

  @GetMapping(value = "/users/{userId}")
  public ResponseEntity<User> getUserById(@PathVariable Long userId){
    return userService.getUserById(userId);
  }

  @PutMapping(value = "/users")
  public ResponseEntity<User> updateProfileName(@RequestBody User user){
    return userService.updateUser(user);
  }
}
