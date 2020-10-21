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

  // login(usuario:Usuario)
  // {

  //   console.log(usuario);
    
  //   return this.http.post(this.url + "/login", usuario)
  // }
  
  // putUsuario(nuevo_usuario: Usuario)
  // {
  //   return this.http.put(this.url, nuevo_usuario)
  // }

  // deleteUsuario(id:Number)
  // {
  //   const httpOptions = {
  //   headers: new HttpHeaders({ 'Content-Type': 'application/json' }), body: {id:id} };
  //   return this.http.delete(this.url, httpOptions);
  // }
}
