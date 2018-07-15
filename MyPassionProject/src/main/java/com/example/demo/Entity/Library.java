//package com.example.demo.Entity;
//
//import javax.persistence.*;
//import java.util.HashSet;
//import java.util.Set;
//
//@Entity
//public class Library {
//    @Id
//    @GeneratedValue
//    Long libraryId;
//
//    @ManyToMany(fetch = FetchType.LAZY,
//            cascade = {
//                    CascadeType.PERSIST,
//                    CascadeType.MERGE
//            })
//    @JoinTable(name = "game_library",
//        joinColumns = {@JoinColumn(name = "id")},
//    inverseJoinColumns = {@JoinColumn(name = "game_id")})
//    private Set<Game> games;
//
//    public Set<Game> getGames() {
//        return games;
//    }
//
//    public void setGames(Set<Game> games) {
//        this.games = games;
//    }
//
//    public void addGames(Game game){
//        if(games==null){
//            this.games = new HashSet<Game>();
//        }
//        games.add(game);
//    }
//}
