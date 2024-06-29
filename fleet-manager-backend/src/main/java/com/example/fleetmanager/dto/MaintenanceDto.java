package com.example.fleetmanager.dto;

import com.example.fleetmanager.entity.Vehicle;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Date;

@Data
@AllArgsConstructor
public class MaintenanceDto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Vehicle vehicle;
    private Date insuranceDate;
    private Date serviceDate;
    private Boolean isReady;
}
