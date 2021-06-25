package com.pranay.cruddemo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.pranay.cruddemo.entity.Professor;
import com.pranay.cruddemo.service.ProfessorService;


@RestController
@CrossOrigin(allowedHeaders="*",origins="*")
public class ProfessorController {
	@Autowired
	private ProfessorService professorService;
	@PostMapping("/registerProfessor")
	public Professor registerDonor(@RequestBody Professor professor) {
		return professorService.registerProfessor(professor);
	}
	@GetMapping("/getProfessors")
	public List<Professor> getProfessors(){
		return professorService.getProfessors();
		
	}@DeleteMapping("/deleteProfessor")
	public void deleteProfessor(@RequestParam Integer id) {
		professorService.deleteProfessor(id);
	}
	@PutMapping("/updateProfessor")
	public Professor updateProfessor(@RequestBody Professor professor) {
		return professorService.updateProfessor(professor);
	}
	@GetMapping("/findProfessorbyid")
	public Professor getOnlyProfessor(@RequestParam Integer id) {
		return professorService.getOnlyProfessor(id);
	}
	@PostMapping("/loginProfessor")
	public Professor checkProfessor(@RequestBody Professor Professor) {
		
		return professorService.checkProfessor(Professor);
	}
	@GetMapping("/updateMessage")
	public Professor updateProfessorMessage(@RequestParam Integer pid,@RequestParam String pres) {
		return professorService.updateProfessorMessage(pid,pres);
	}
	@GetMapping("/updateMaterial")
	public Professor updateProfessorMaterial(@RequestParam Integer pid,@RequestParam String pres) {
		return professorService.updateProfessorMaterial(pid,pres);
	}
	//idhi not neccesary just trying  from my side
	@GetMapping("/updateModifyMessage")
	public Professor updateProfessorModifyMessage(@RequestParam Integer pid,@RequestParam Integer sid,@RequestParam String pres) {
		return professorService.updateProfessorModifyMessage(pid,sid,pres);
	}
}
