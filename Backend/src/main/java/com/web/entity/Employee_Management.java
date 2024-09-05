package com.web.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Employee_Management {
	
	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String employee_fullname;
	private String employee_email;
	private Long employee_mobile;
	private String employee_password;
	public Employee_Management() {
		super();
	}
	public Employee_Management(Integer id, String employee_fullname, String employee_email, Long employee_mobile,
			String employee_password) {
		super();
		this.id = id;
		this.employee_fullname = employee_fullname;
		this.employee_email = employee_email;
		this.employee_mobile = employee_mobile;
		this.employee_password = employee_password;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getEmployee_fullname() {
		return employee_fullname;
	}
	public void setEmployee_fullname(String employee_fullname) {
		this.employee_fullname = employee_fullname;
	}
	public String getEmployee_email() {
		return employee_email;
	}
	public void setEmployee_email(String employee_email) {
		this.employee_email = employee_email;
	}
	public Long getEmployee_mobile() {
		return employee_mobile;
	}
	public void setEmployee_mobile(Long employee_mobile) {
		this.employee_mobile = employee_mobile;
	}
	public String getEmployee_password() {
		return employee_password;
	}
	public void setEmployee_password(String employee_password) {
		this.employee_password = employee_password;
	}
	@Override
	public String toString() {
		return "Employee_Management [id=" + id + ", employee_fullname=" + employee_fullname + ", employee_email="
				+ employee_email + ", employee_mobile=" + employee_mobile + ", employee_password=" + employee_password
				+ "]";
	}
	
	
}
