package com.example.fleetmanager.service;

import com.example.fleetmanager.dto.MaintenanceDto;

import java.util.List;

public interface MaintenanceService {

    List<MaintenanceDto> getAllMaintenance();
}
