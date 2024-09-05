package com.web.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.web.entity.Employee_Management;
import com.web.repo.MyRepo;

@org.springframework.stereotype.Service
public class ServiceImp implements Service {
	
	@Autowired
	private MyRepo repo;

	@Override
	public String Save(Employee_Management employee) {
		// TODO Auto-generated method stub
		String message=null;
		
		Optional<Employee_Management> emp=repo.findById(employee.getId());
		
		if(emp.isPresent()){
			message="id already Exits";
		}
		else {
			repo.save(employee);
			message="data saved";
			
		}
		return message;
	}

	@Override
	public String Check(Integer id,Employee_Management employee) {
		// TODO Auto-generated method stub
		Optional<Employee_Management> emp=repo.findById(id);
		String message=null;
		
		if(emp.isPresent()) {
			
			Employee_Management existing_emp=emp.get();
			if (existing_emp.getId().equals(id) && existing_emp.getEmployee_password().equals(employee.getEmployee_password())) {
				message="login Successfull";
				
			} 
			else {
				message= "Please check Id and Password";
			}
			
		}
		else {
			message="I can't find your account please register before loin";
		}
		return message;
	}

	@Override
	public String Delete(Integer id,Employee_Management employee) {
		// TODO Auto-generated method stub
		Optional<Employee_Management> emp = repo.findById(employee.getId());
		String message=null;
		
		if (emp.isPresent()) {
			repo.deleteById(id);
			message="Deleted Account Successfully";
		} else {
			message="Account couldn't found";
		}
		return message;
	}

	@Override
	public Employee_Management GetEmp(Integer id,String password) {
		Optional<Employee_Management> emp= repo.findById(id);
		if (emp.isPresent()) {
			Employee_Management empdata=emp.get();
			if (empdata.getId().equals(id) && empdata.getEmployee_password().equals(password)) {
				return  empdata;
			} 
			else {
				throw new RuntimeException("Account Id Mismatch");
			}
		}
		else {
			throw new RuntimeException("Account couldn't found");
		}
	}

	@Override
	public String Update(Integer id, Employee_Management employee) {
		// TODO Auto-generated method stub
		Optional<Employee_Management> emp = repo.findById(id);
		if (emp.isPresent()) {
			repo.save(employee);
			return "Data Modified";
		} else {
			return "Account id didn't found";
		}
	}

}
