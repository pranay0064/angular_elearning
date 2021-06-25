package com.pranay.cruddemo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pranay.cruddemo.entity.Professor;
import com.pranay.cruddemo.entity.Student;
import com.pranay.cruddemo.repository.ProfessorRepository;
import com.pranay.cruddemo.repository.StudentRepository;

@Service
public class ProfessorService {
	@Autowired
	private ProfessorRepository professorRepository;
	
	//wanna delete start here
	@Autowired
	private StudentRepository studentRepository;
	//end here
	
	public List<Professor> getProfessors(){
		return(List<Professor>) professorRepository.findAll();
		//return null;
	}
	
	
	//wanna delete start here
	/*public List<Professor> getProfessorsModific(){
		//return(List<Professor>) professorRepository.findAll();
		List<Professor> p=(List<Professor>)professorRepository.findAll();
		for(int i=0;i<p.size()
		return null;
	}*/
	//end here
	
	public Professor registerProfessor(Professor professor) {
		professor.setMessage(null);
		return professorRepository.save(professor);
	}
	public void deleteProfessor(Integer id) {
		professorRepository.deleteById(id);
	}
	public Professor updateProfessor(Professor professor) {
		Integer id=professor.getPid();
		Professor dnr=professorRepository.findById(id).get();
		dnr.setPname(professor.getPname());
		dnr.setEmail(professor.getEmail());
		dnr.setPassword(professor.getPassword());
		dnr.setSubject(professor.getSubject());
		dnr.setUniversity(professor.getUniversity());
		dnr.setMaterial(professor.getMaterial());
		return professorRepository.save(dnr);
		//return dnr;
	}
	public Professor getOnlyProfessor(Integer id) {
		Professor dnr=professorRepository.findById(id).get();
		return dnr;
	}
	
	public Professor checkProfessor(Professor user) {
		List<Professor> dnr = (List<Professor>) professorRepository.findAll();
		for (Professor other : dnr) {
			//System.out.println(other.getEmail()+" "+user.getEmail() +" "+ other.getPassword()+" "+user.getPassword());
            if (other.getEmail().equals(user.getEmail()) && other.getPassword().equals(user.getPassword())) {
            	
                return other;
            }
        }
		return null;
	}
	public Professor updateProfessorMessage(int pid,String pres) {
		Optional<Professor> optional=professorRepository.findById(pid);
		if(optional.isPresent()) {
			Professor p= optional.get();
			p.setMessage(pres);
			professorRepository.save(p);	
			return p;
		}
		return null;
	}
	public Professor updateProfessorMaterial(Integer pid, String pres) {
		Optional<Professor> optional=professorRepository.findById(pid);
		if(optional.isPresent()) {
			Professor p= optional.get();
			p.setMaterial(pres);
			professorRepository.save(p);
			return p;
		}
		return null;
	}
	//wanna delete starte from here
	public Professor updateProfessorModifyMessage(Integer pid, Integer sid, String pres) {
		Optional<Professor> optional=professorRepository.findById(pid);
		Optional<Student> stu=studentRepository.findById(sid);
		if(optional.isPresent()) {
			Professor p= optional.get();
			Student s=stu.get();
			p.setMessage(p.getMessage()+"/ "+pres+" By "+s.getEmail()+"/ ");
			professorRepository.save(p);	
			return p;
		}
		return null;
	}
}
