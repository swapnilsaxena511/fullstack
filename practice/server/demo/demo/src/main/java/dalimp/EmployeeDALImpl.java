package dalimp;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;

import com.example.demo.Employee;

import dal.EmployeeDAL;

public class EmployeeDALImpl implements EmployeeDAL {
	@Autowired
	private MongoTemplate mongoTemplate;


	@Override
	public List<Employee> getAllEmployees() {
		return mongoTemplate.findAll(Employee.class);
	}

}
