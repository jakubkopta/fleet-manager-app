package com.example.fleetmanager.service;

import com.example.fleetmanager.dto.VehicleDto;

import java.util.List;

public interface VehicleService {
    VehicleDto createVehicle(VehicleDto vehicleDto);
    VehicleDto getVehicleById(Long id);
    List<VehicleDto> getAllVehicles();
    void deleteVehicleById(Long id);
}
