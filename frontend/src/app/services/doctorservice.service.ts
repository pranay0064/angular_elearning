import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoctorserviceService {
  doctorDetails=null;
  constructor(private httpClient:HttpClient) { }
  api='http://localhost:8084';
  public getProfessors(){
    return this.httpClient.get(this.api+'/getProfessors');
  }
  public registerProfessor(profdata) {
    return this.httpClient.post(this.api + '/registerProfessor', profdata);
  }
  public deleteProfessor(pid) {
    return this.httpClient.delete(this.api + '/deleteProfessor?id=' + pid);
  }
  public updateProfessor(prof) {
    return this.httpClient.put(this.api + '/updateProfessor', prof);
  }
  //findProfessorbyid
  public getProfessorById(pid){
    return this.httpClient.get(this.api+'/findProfessorbyid?id='+pid);
  }
  public getDoctorById(did){
    return this.httpClient.get(this.api+'/findDoctorbyid?id='+did);
  }
  public setAvailabilityToZero(did){
    return this.httpClient.get(this.api+'/setAvailability?id='+did);
  }
  public checkProfessor(prof){
    console.log(prof);
    //console.log(this.httpClient.post(this.api+'/loginDoctor',doctor));
    return this.httpClient.post(this.api+'/loginProfessor',prof);
  }
  public updateProfessorMessage(pid,pres){
    console.log(pres+" "+pid);
    return this.httpClient.get(this.api+'/updateMessage?pid='+pid+'&pres='+pres);
  }
  public updateProfessorModificMessage(pid,sid,pres){
    console.log(pres+" "+pid+"SId: "+sid);
    return this.httpClient.get(this.api+'/updateModifyMessage?pid='+pid+'&sid='+sid+'&pres='+pres);
  }
  public updateProfessorMaterial(pid,pres){
    console.log(pres);
    return this.httpClient.get(this.api+'/updateMaterial?pid='+pid+'&pres='+pres);
  }
}
