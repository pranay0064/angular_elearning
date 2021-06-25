package com.pranay.cruddemo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.pranay.cruddemo.entity.Student;
import com.pranay.cruddemo.service.StudentService;

@RestController
@CrossOrigin(allowedHeaders="*",origins="*")
public class StudentController {
	@Autowired
	private StudentService studentService;
	
	@GetMapping("/getStudents")
	public List<Student> getStudents(){
		return studentService.getStudents();
		
	}
	@PostMapping("/loginStudent")
	public Student checkStudent(@RequestBody Student user) {
		
		return studentService.checkStudent(user);
	}
	@PutMapping("/updateStudent")
	public Student updateStudent(@RequestBody Student student) {
		return studentService.updateStudent(student);
	}
	@GetMapping("/updateStudentMessage")
	public Student updateStudentMessage(@RequestParam Integer sid,@RequestParam String pres) {
		return studentService.updateStudentMessage(sid,pres);
	}
	@PostMapping("/registerStudent")
	public Student registerStudent(@RequestBody Student student) {
		student.setMessage(null);
		return studentService.registerStudent(student);
	}
}
