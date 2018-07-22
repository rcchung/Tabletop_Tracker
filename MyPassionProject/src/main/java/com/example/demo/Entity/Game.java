package com.example.demo.Entity;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;

@Entity
@Table(uniqueConstraints={@UniqueConstraint(columnNames={"name"})})
@Setter @Getter
public class Game {
  private String name;
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private long id;
  private String description;
}