package com.pranay.cruddemo.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.pranay.cruddemo.entity.Professor;

@Repository
public interface ProfessorRepository extends CrudRepository<Professor,Integer> {

}
