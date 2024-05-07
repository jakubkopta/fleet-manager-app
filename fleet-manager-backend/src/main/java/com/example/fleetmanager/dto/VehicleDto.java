package com.example.fleetmanager.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class VehicleDto {
    private Long id;
    private String brand;
    private String model;
    private int year;
    private String plateNumber;
    private String status;
}
