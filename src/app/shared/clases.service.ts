import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Clases } from '../models/clases';


@Injectable({
  providedIn: 'root'
})
export class ClasesService {

  public clase: Clases;

  private url = "http://localhost:3000/clases"
  constructor(private http: HttpClient) { }

  // CREANDO CLASES NUEVAS
  postClase(nueva_clase: Clases)
  {
    return this.http.post(this.url, nueva_clase)
  }

  postCameo(id,usuario)
  {
    return this.http.put(this.url + "/cameos", id,usuario)
  }
}
