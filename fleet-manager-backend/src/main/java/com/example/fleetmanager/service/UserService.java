package com.example.fleetmanager.service;

import com.example.fleetmanager.dto.UserDto;

import java.util.List;

public interface UserService {
    UserDto createUser(UserDto userDto);
    UserDto getUserById(Long id);
    List<UserDto> getAllUsers();
    void deleteUserById(Long id);
}
