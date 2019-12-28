package com.example.demo;

import java.util.List;

import javax.validation.Valid;

import org.bson.types.ObjectId;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/employee")
public class EmployeeController {
	
	private final EmployeeMongoRepository employeeMongoRepository;
	
	public EmployeeController(EmployeeMongoRepository employeeMongoRepository) {
		super();
		this.employeeMongoRepository = employeeMongoRepository;
	}



	@GetMapping(value = "employees")
	public List<Employee> getAllEmployees() {
		return employeeMongoRepository.findAll();
	}
	
	@PostMapping(value = "add")
	public Employee addNewEmployee(@RequestBody Employee employee) {
		//LOG.info("Saving user.");
		return employeeMongoRepository.save(employee);
	}
	
	@RequestMapping(value = "modify", method = RequestMethod.PUT)
	public Employee modifyEmpById(@Valid @RequestBody Employee employee) {
	   return employeeMongoRepository.save(employee);
	}
	
	
	@RequestMapping(value = "remove/{id}", method = RequestMethod.DELETE)
	public void deleteEmp(@PathVariable ObjectId id) {
		employeeMongoRepository.delete(employeeMongoRepository.findBy_id(id));
	}
	@GetMapping("test")
	String testApi(){
		return "api is working";
	} 

}
