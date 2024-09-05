package com.web.service;

import com.web.entity.Employee_Management;

public interface Service {
	
	public String Save(Employee_Management employee);
	public String Check(Integer id,Employee_Management employee);
	public String Delete(Integer id,Employee_Management employee);
	public Employee_Management GetEmp(Integer id,String password);
	public String Update(Integer id,Employee_Management employee);
}
