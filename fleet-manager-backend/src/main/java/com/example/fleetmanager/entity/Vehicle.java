package com.example.fleetmanager.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "vehicles")
@Entity
public class Vehicle {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String brand;
    private String model;
    private int year;
    @Column(nullable = false, unique = true)
    private String plateNumber;
    private String description;
    private Boolean available = true;
    @OneToOne(mappedBy = "vehicle", cascade = CascadeType.ALL)
    @JsonManagedReference
    private Maintenance maintenance;
    @OneToOne
    @JoinColumn(name = "user_id")
    @JsonBackReference
    private User user;
}
