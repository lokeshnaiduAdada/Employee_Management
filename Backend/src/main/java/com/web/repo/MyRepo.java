package com.web.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.web.entity.Employee_Management;
@Repository
public interface MyRepo extends JpaRepository<Employee_Management, Integer> {

}
