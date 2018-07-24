package com.example.demo.Entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Getter @Setter
@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String summary;
    private String profileName;
    @Column(unique = true)
    private String userName;

    @ManyToMany(
            cascade = {
                    CascadeType.PERSIST,
                    CascadeType.MERGE
            })
    @JoinTable(name = "user_game",
            joinColumns = {@JoinColumn(name = "user_id")},
            inverseJoinColumns = {@JoinColumn(name = "game_id")})
    private Set<Game> gameLibrary;

    public void addGames(Game game){
        if(gameLibrary==null){
            this.gameLibrary = new HashSet<Game>();
        }
        gameLibrary.add(game);
    }

    public void setSummary(String summary) {
        this.summary = summary;
    }

    public void setProfileName(String profileName) {
        this.profileName = profileName;
    }

    public String getSummary() {
        return summary;
    }

    public String getProfileName() {
        return profileName;
    }
}
