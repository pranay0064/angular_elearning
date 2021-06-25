package com.pranay.cruddemo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pranay.cruddemo.entity.Student;
import com.pranay.cruddemo.repository.StudentRepository;

@Service
public class StudentService {
	@Autowired
	private StudentRepository studentRepository;
	public List<Student> getStudents(){
		return(List<Student>) studentRepository.findAll();
		//return null;
	}
	public Student checkStudent(Student user) {
		List<Student> u = (List<Student>) studentRepository.findAll();
		for (Student other : u) {
			//System.out.println(other.getEmail()+" "+user.getEmail() +" "+ other.getPassword()+" "+user.getPassword());
            if (other.getEmail().equals(user.getEmail()) && other.getPassword().equals(user.getPassword())) {
            	
                return other;
            }
        }
		return null;
	} 
	public Student updateStudent(Student student) {
		Integer id=student.getSid();
		Student ptn=studentRepository.findById(id).get();
		ptn.setEmail(student.getEmail());
		ptn.setPassword(student.getPassword());
		ptn.setSname(student.getSname());
		ptn.setMessage(student.getMessage());
		ptn.setUniversity(student.getUniversity());
		return studentRepository.save(ptn);
	}
	public Student updateStudentMessage(int sid,String pres) {
		Optional<Student> optional=studentRepository.findById(sid);
		if(optional.isPresent()) {
			Student p= optional.get();
			p.setMessage(pres);
			studentRepository.save(p);
			return p;
		}
		return null;
	}
	public Student registerStudent(Student student) {
		return studentRepository.save(student);
	}
}
