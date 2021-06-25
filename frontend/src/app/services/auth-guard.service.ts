import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ShareService } from './share.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private s:ShareService,private route:Router) { }
  canActivate():boolean{
    if(this.s.get()){
      return true;
    }
    else{
      alert("not logged in");
      this.route.navigate(['/login']);
    }
    return false;
  }
}
