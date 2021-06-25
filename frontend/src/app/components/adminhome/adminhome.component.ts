import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { DoctorserviceService } from 'src/app/services/doctorservice.service';
@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {
  NgForm = NgForm;
  profDetails = null;
  profToUpdate = {
    pid: '',
    pname: '',
    email: '',
    password:'',
    subject: '',
    university: '',
    material: ''
  };
  constructor(private doctorService: DoctorserviceService) {}

  ngOnInit(): void {
    this.getProfessorDetails();
    //this.getUserDetails();
  }
  register(registerForm: NgForm) {
    this.doctorService.registerProfessor(registerForm.value).subscribe(
      resp => {
        console.log(resp);
        registerForm.reset();
        this.getProfessorDetails();
      },
      err => {
        console.log(err);
      }
    );
    console.log('reg');
  }

  getProfessorDetails() {
    this.doctorService.getProfessors().subscribe(
      resp => {
        console.log(resp);
        this.profDetails = resp;
      },
      err => {
        console.log(err);
      }
    );
    console.log('doctor');
  }
  deleteProfessor(prof) {
    this.doctorService.deleteProfessor(prof.pid).subscribe(
      resp => {
        console.log(resp);
        this.getProfessorDetails();
      },
      err => {
        console.log(err);
      }
    );
    console.log('reg');
  }

  edit(prof) {
    this.profToUpdate = prof;
  }
  updateProfessorDetails(updateForm: NgForm) {
    console.log("here near update)");
    this.doctorService.updateProfessor(this.profToUpdate).subscribe(
      resp => {
        console.log(resp);

        this.getProfessorDetails();
        updateForm.reset();
      },
      err => {
        console.log(err);
      }
    );
    console.log('reg');
  }

}
