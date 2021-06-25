import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PatientService } from 'src/app/services/patient.service';
import { ShareService } from 'src/app/services/share.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private route: Router,private patientService:PatientService,private s:ShareService) { }

  ngOnInit(): void {
  }

  login(registerForm: NgForm){
    //console.log(registerForm.value);
    this.patientService.checkPatient(registerForm.value).subscribe(
      (resp) => {
        //console.log(resp);
        if (resp) {
          //console.log(resp);
          var data=JSON.stringify(resp);
          const obj=JSON.parse(data);
          this.patientService.patientDetails=obj;
          console.log(this.patientService.patientDetails);
          this.s.set(true);
          //console.log(this.s.name+" "+this.s.email+" "+this.s.phoneNumber);
          this.route.navigate(['/home']);
        }
        else{
          alert("please provide correct email or password");
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }
  openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  onSubmit(data) {
    console.log("Email: " + data.email
      + "Password: " + data.passwd);
    //this.email=data.email;
    //this.x=data.passwd;
    if(data.email=="pranaygarlapati@gmail.com" && data.passwd=="pranay"){
      this.s.setAdmin(true);
      this.route.navigate(['/adminhome']);
    }
    else{
      alert("please enter correct email or password");
      this.route.navigate(['/login']);
    }
  }

  closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
}
