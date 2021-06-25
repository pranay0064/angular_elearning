import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ShareService } from './share.service';

@Injectable({
  providedIn: 'root'
})
export class AdminguardService implements CanActivate {

  constructor(private s:ShareService,private route:Router) { }
  canActivate():boolean{
    if(this.s.getAdmin()){
      return true;
    }
    else{
      alert("Admin Not logged in");
      this.route.navigate(['/login']);
    }
    return false;
  }
}
