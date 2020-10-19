import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private url = "http://localhost:3/usuario"
  constructor(private http: HttpClient) { }

  // getUsuarios()
  // {
  //   return this.http.get(this.url)
  // }

  // getUsuario(id:number)
  // {
  //   return this.http.get(this.url + "/" + id)
  // }

  postUsuario(nuevo_usuario: Usuario)
  {
    return this.http.post(this.url, nuevo_usuario)
  }

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