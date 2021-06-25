import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ShareService } from './share.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private s:ShareService,private route:Router) { }
  canActivate():boolean{
    if(this.s.getDoc()){
      return true;
    }
    else{
      alert("not logged in");
      this.route.navigate(['/doctorhome']);
    }
    return false;
  }
}
