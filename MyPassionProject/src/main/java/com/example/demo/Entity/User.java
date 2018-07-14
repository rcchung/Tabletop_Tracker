package com.example.demo.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.ArrayList;

@Entity
public class User {

  @Id
  @GeneratedValue
  private long id;
  private String summary;
  private String profileName;
  private String userName;
//  private ArrayList<Game> games;

  public long getId() {
    return id;
  }

  public String getSummary() {
    return summary;
  }

  public void setSummary(String summary) {
    this.summary = summary;
  }

  public String getProfileName() {
    return profileName;
  }

  public void setProfileName(String profileName) {
    this.profileName = profileName;
  }

  public String getUserName() {
    return userName;
  }

  public void setUserName(String userName) {
    this.userName = userName;
  }

//  public ArrayList<Game> getGames() {
//    return games;
//  }
//
//  public void setGames(ArrayList<Game> games) {
//    this.games = games;
//  }
}
