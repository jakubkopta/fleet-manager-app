package com.example.fleetmanager.controller;

import com.example.fleetmanager.dto.MaintenanceDto;
import com.example.fleetmanager.service.MaintenanceService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/maintenance")
public class MaintenanceController {

    private final MaintenanceService maintenanceService;

    public MaintenanceController(MaintenanceService maintenanceService) {
        this.maintenanceService = maintenanceService;
    }

    @GetMapping
    public ResponseEntity<List<MaintenanceDto>> getAllUsers() {
        List<MaintenanceDto> maintenance = maintenanceService.getAllMaintenance();
        return ResponseEntity.ok(maintenance);
    }
}

