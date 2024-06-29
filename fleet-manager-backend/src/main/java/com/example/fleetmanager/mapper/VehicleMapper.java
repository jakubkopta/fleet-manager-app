package com.example.fleetmanager.mapper;

import com.example.fleetmanager.dto.VehicleDto;
import com.example.fleetmanager.entity.Vehicle;

public class VehicleMapper {
    public static Vehicle mapToVehicle(VehicleDto vehicleDto) {
        return new Vehicle(
                vehicleDto.getId(),
                vehicleDto.getBrand(),
                vehicleDto.getModel(),
                vehicleDto.getYear(),
                vehicleDto.getPlateNumber(),
                vehicleDto.getDescription(),
                vehicleDto.getAvailable(),
                vehicleDto.getMaintenance(),
                vehicleDto.getUser()
        );
    }

    public static VehicleDto mapToVehicleDto(Vehicle vehicle) {
        return new VehicleDto(
                vehicle.getId(),
                vehicle.getBrand(),
                vehicle.getModel(),
                vehicle.getYear(),
                vehicle.getPlateNumber(),
                vehicle.getDescription(),
                vehicle.getAvailable(),
                vehicle.getMaintenance(),
                vehicle.getUser()
        );
    }
}
