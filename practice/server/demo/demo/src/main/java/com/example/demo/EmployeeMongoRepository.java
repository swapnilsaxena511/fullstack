package com.example.demo;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


@Repository	
public interface EmployeeMongoRepository extends MongoRepository<Employee, String> {
	Employee findBy_id(ObjectId _id);
}
