package com.example.demo.Service;

import com.example.demo.Entity.User;
import com.example.demo.Repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


@Service
public class UserService {
  private UserRepo userRepo;

  @Autowired
  public UserService(UserRepo userRepo) {
    this.userRepo = userRepo;
  }

  //create methods to do things to the backend **hint CRUD**

  public ResponseEntity<User> setUser (User user){
    return new ResponseEntity<>(userRepo.save(user), HttpStatus.CREATED);
  }

  public ResponseEntity<User> getUserById(Long id){
    return new ResponseEntity<>(userRepo.getOne(id), HttpStatus.CREATED);
  }

  public ResponseEntity<User> updateUser (User updatedUser){
    updatedUser = userRepo.save(updatedUser);
    return new ResponseEntity<>(updatedUser, HttpStatus.OK);
  }
}
