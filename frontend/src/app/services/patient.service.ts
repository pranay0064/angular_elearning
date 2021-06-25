import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ControlContainer } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  patientDetails=null;
  constructor(private httpClient:HttpClient) { }
  api='http://localhost:8084';
  public getPatients(){
    return this.httpClient.get(this.api+'/getPatients');
  }
  public checkPatient(student){
    console.log(student);
    console.log(this.httpClient.post(this.api+'/loginStudent',student));
    return this.httpClient.post(this.api+'/loginStudent',student);
  }
  public setSlotADoctor(did,pid){
    return this.httpClient.get(this.api+'/setSlotADoctor?did='+did+'&pid='+pid);
  }
  public setSlotBDoctor(did,pid){
    return this.httpClient.get(this.api+'/setSlotBDoctor?did='+did+'&pid='+pid);
  }
  public getPatientsbySlot(did){
    return this.httpClient.get(this.api+'/getPatientsbySlot?did='+did);
  }
  public updatePatient(patient){
    return this.httpClient.put(this.api+'/updatePatient',patient);
  }
  
  public updateStudentMessage(sid,pres){
    console.log(pres);
    return this.httpClient.get(this.api+'/updateStudentMessage?sid='+sid+'&pres='+pres);
  }
  public registerStudent(student){
    return this.httpClient.post(this.api+'/registerStudent',student);
  }
}
