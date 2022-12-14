import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DownloadService {

  constructor(private httpClient:HttpClient) { }
public downloadFile(){
  return this.httpClient.get("https://localhost:44352/api/CertificateVaccine",{observe:'response',responseType:'blob'})
}
}
