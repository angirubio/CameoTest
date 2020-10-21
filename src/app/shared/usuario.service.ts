import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private url = "http://localhost:3000/usuario"
  public usuario:Usuario;
  constructor(private http: HttpClient) { }

  postUsuario(nuevo_usuario: Usuario)
  {
    return this.http.post(this.url, nuevo_usuario)
  }

  login(usuario_entrada:Usuario)
  { 
    return this.http.post(this.url + "/login", usuario_entrada)
  }

  putUsuario(usuario_actualizado: Usuario)
    {
      return this.http.put(this.url, usuario_actualizado)
    }

    postCameo(usuario_actualizado: Usuario)
    {
      return this.http.put(this.url + "/cameos", usuario_actualizado)
    }

  // deleteUsuario(id:Number)
  // {
  //   const httpOptions = {
  //   headers: new HttpHeaders({ 'Content-Type': 'application/json' }), body: {id:id} };
  //   return this.http.delete(this.url, httpOptions);
  // }

}