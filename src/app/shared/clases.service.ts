import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Clases } from '../models/clases';


@Injectable({
  providedIn: 'root'
})
export class ClasesService {

  private url = "http://localhost:3000/clases"
  constructor(private http: HttpClient) { }

  // getUsuarios()
  // {
  //   return this.http.get(this.url)
  // }

  // getUsuario(id:number)
  // {
  //   return this.http.get(this.url + "/" + id)
  // }

  // CREANDO CLASES NUEVAS

  postClase(nuevo_clase: Clases)
  {
    return this.http.post(this.url, nuevo_clase)
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
