package com.example.demo.Entity;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String summary;
    private String profileName;
    @Column(unique = true)
    private String userName;

    @ManyToMany(fetch = FetchType.LAZY,
            cascade = {
                    CascadeType.PERSIST,
                    CascadeType.MERGE
            })
    @JoinTable(name = "user_game",
            joinColumns = {@JoinColumn(name = "user_id")},
            inverseJoinColumns = {@JoinColumn(name = "game_id")})
    private Set<Game> gameLibrary;

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


    public Set<Game> getGameLibrary() {
        return gameLibrary;
    }

    public void setGameLibrary(Set<Game> gameLibrary) {
        this.gameLibrary = gameLibrary;
    }

    public void addGames(Game game){
        if(gameLibrary==null){
            this.gameLibrary = new HashSet<Game>();
        }
        gameLibrary.add(game);
    }

}
