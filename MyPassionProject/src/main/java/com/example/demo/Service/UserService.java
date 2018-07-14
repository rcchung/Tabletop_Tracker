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

  public ResponseEntity<User> createUser (User user){
    return new ResponseEntity<>(userRepo.save(user), HttpStatus.CREATED);
  }

  public ResponseEntity<User> getUserById(Long id){
    return new ResponseEntity<>(userRepo.findById(id).get(), HttpStatus.CREATED);
  }

  public ResponseEntity<User> updateUserSummary (User updatedUser, Long userId){
    User userToUpdate = userRepo.getOne(userId);
    userToUpdate.setSummary(updatedUser.getSummary());
    return new ResponseEntity<>(userRepo.save(userToUpdate), HttpStatus.OK);
  }

  public ResponseEntity<User> updateUserProfileName (User updatedUser, Long userId){
    User userToUpdate = userRepo.getOne(userId);
    userToUpdate.setProfileName(updatedUser.getProfileName());
    return new ResponseEntity<>(userRepo.save(userToUpdate), HttpStatus.OK);
  }

  public ResponseEntity<User> deleteUser(User user) {
    userRepo.delete(user);
    return new ResponseEntity<>(user,HttpStatus.OK);
  }
}
