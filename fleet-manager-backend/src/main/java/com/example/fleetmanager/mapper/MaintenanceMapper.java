package com.example.fleetmanager.mapper;

import com.example.fleetmanager.dto.MaintenanceDto;
import com.example.fleetmanager.entity.Maintenance;

public class MaintenanceMapper {
    public static Maintenance mapToMaintenance(MaintenanceDto maintenanceDto) {
        return new Maintenance(
                maintenanceDto.getId(),
                maintenanceDto.getVehicle(),
                maintenanceDto.getInsuranceDate(),
                maintenanceDto.getServiceDate(),
                maintenanceDto.getIsReady()
        );
    }

    public static MaintenanceDto mapToMaintenanceDto(Maintenance maintenance) {
        return new MaintenanceDto(
                maintenance.getId(),
                maintenance.getVehicle(),
                maintenance.getInsuranceDate(),
                maintenance.getServiceDate(),
                maintenance.getIsReady()
        );
    }
}
