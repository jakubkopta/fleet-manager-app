package com.example.fleetmanager.service.impl;

import com.example.fleetmanager.mapper.MaintenanceMapper;
import com.example.fleetmanager.dto.MaintenanceDto;
import com.example.fleetmanager.entity.Maintenance;
import com.example.fleetmanager.repository.MaintenanceRepository;
import com.example.fleetmanager.service.MaintenanceService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class MaintenanceServiceImpl implements MaintenanceService {

    MaintenanceRepository maintenanceRepository;

    public MaintenanceServiceImpl(MaintenanceRepository maintenanceRepository) {
        this.maintenanceRepository = maintenanceRepository;
    }

    @Override
    public List<MaintenanceDto> getAllMaintenance() {
        List<Maintenance> users = maintenanceRepository.findAll();
        return users
                .stream()
                .map(MaintenanceMapper::mapToMaintenanceDto)
                .collect(Collectors.toList());
    }

}
