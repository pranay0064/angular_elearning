import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DoctorserviceService } from 'src/app/services/doctorservice.service';
import { ShareService } from 'src/app/services/share.service';

@Component({
  selector: 'app-doctorlogin',
  templateUrl: './doctorlogin.component.html',
  styleUrls: ['./doctorlogin.component.css']
})
export class DoctorloginComponent implements OnInit {

  constructor( private route: Router,private s:ShareService,private doctorService:DoctorserviceService) { }
  ngOnInit(): void {
  }
  login(registerForm: NgForm){
    //console.log(registerForm.value);
    this.doctorService.checkProfessor(registerForm.value).subscribe(
      (resp) => {
        //console.log(resp);
        if (resp) {
          //console.log(resp);
          //var data=JSON.stringify(resp);
          //const obj=JSON.parse(data);
          this.doctorService.doctorDetails=resp;
          console.log(this.doctorService.doctorDetails);
          this.s.setDoc(true);
          //console.log(this.s.name+" "+this.s.email+" "+this.s.phoneNumber);
          this.route.navigate(['/doctorhome']);
        }
        else{
          alert("please provide correct email or password");
          this.route.navigate(['/doctorlogin']);
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
