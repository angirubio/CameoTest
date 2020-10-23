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
    return this.http.post(this.url, nueva_clase);
  }

  getClases(){
    return this.http.get(this.url2)
  }
  
  postCameo(clases_id,usuario_id)
  {
    return this.http.post(this.url + "/cameos", {"clases_id":clases_id, "usuario_id" : usuario_id});
  }
  
  organizarClases(usuario_id)
  {
    return this.http.get(this.url + "?usuario_id=" + usuario_id);
  }

  filtrarBusqueda(titulo)
  {
    return this.http.get(this.url + "/buscar" + "?titulo=" + titulo);
  }
}
