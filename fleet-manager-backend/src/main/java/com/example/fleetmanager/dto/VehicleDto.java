package com.example.fleetmanager.dto;

import com.example.fleetmanager.entity.Maintenance;
import com.example.fleetmanager.entity.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class VehicleDto {
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
    private Maintenance maintenance;
    private User user;
}
