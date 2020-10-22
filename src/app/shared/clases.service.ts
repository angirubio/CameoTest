import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Clases } from '../models/clases';


@Injectable({
  providedIn: 'root'
})
export class ClasesService {

  public clase: Clases;
  private url = "http://localhost:3000/clases"
  private url2 = "http://localhost:3000/home"
  constructor(private http: HttpClient) { }

  // CREANDO CLASES NUEVAS
  postClase(nueva_clase: Clases)
  {
    return this.http.post(this.url, nueva_clase)
  }

  getClases(){
    return this.http.get(this.url2)
  }

  showClase(clases_id){
    return this.http.get(this.url2 + "/publicacion", clases_id);
  }
  
  postCameo(clase_id,usuario_id)
  {
    return this.http.put(this.url + "/cameos", clase_id,usuario_id)
  }
}
