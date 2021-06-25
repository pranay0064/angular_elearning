import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  did:number;
  pid:number;
  _check: Boolean;
  doc_check:Boolean;
  admin_check:Boolean;
  constructor() { }
  public get() {
    return this._check;
  }
  public set(thecheck: Boolean) {
    this._check = thecheck;
  }
  public getDoc(){
    return this.doc_check;
  }
  public setDoc(docCheck:Boolean){
    this.doc_check=docCheck;
  }
  public setAdmin(admincheck:Boolean){
    this.admin_check=admincheck;
  }
  public getAdmin(){
    return this.admin_check;
  }
  public getdid(){
    return this.did;
  }
  public setpid(thepid:number){
    this.pid=thepid;
  }
  public getpid(){
    return this.pid;
  }
  public setdid(thedid:number){
    this.did=thedid;
  }
  private messageSource = new BehaviorSubject(null);
  dvalue = this.messageSource.asObservable();
  changeValue(x:number){
    this.messageSource.next(x);
  }
  private pmsgsource=new BehaviorSubject(null);
  pvalue=this.pmsgsource.asObservable();
  changepValue(y:number){
    this.pmsgsource.next(y);
  }
}
