package com.web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.web.entity.Employee_Management;
import com.web.service.ServiceImp;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class MyController {
	
	@Autowired
	private ServiceImp service;
	
	@PostMapping("/register")
	public String Register(@RequestBody Employee_Management employee) {
		return service.Save(employee);
	}
	
	@PostMapping("/login/{id}")
	public String Login(@PathVariable Integer id, @RequestBody Employee_Management employee) {
		return service.Check(id,employee);
	}
	
	@PostMapping("/delete/{id}")
	public String Delete(@PathVariable Integer id,@RequestBody Employee_Management employee) {
		return service.Delete(id,employee);
	}
	
	@GetMapping("/get/{id}/{password}")
	public Employee_Management Get(@PathVariable Integer id,@PathVariable String password){
		return service.GetEmp(id,password);
	}
	
	@PostMapping("/update/{id}/{passwprd}")
	public String Update(@PathVariable Integer id, @RequestBody Employee_Management employee) {
		return service.Update(id, employee);
	}
}