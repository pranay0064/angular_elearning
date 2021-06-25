import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private patientService:PatientService) { }

  ngOnInit(): void {
  }
  register(registerUser: NgForm) {
    
    this.patientService.registerStudent(registerUser.value).subscribe(
      (resp) => {
        console.log(resp);
        registerUser.reset();
        //this.getDonorDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
