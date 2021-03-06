import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Clases } from '../models/clases';

@Injectable({
  providedIn: 'root'
})
export class ClasesService {

  public clase: Clases;
  public clases: Clases[];
  private url = "http://localhost:3000/clases"
  private url2 = "http://localhost:3000/home"
  constructor(private http: HttpClient) { }

  postClase(nueva_clase: Clases)
  {
    return this.http.post(this.url, nueva_clase);
  }

  getClases(){
    return this.http.get(this.url2)
  }
  
  postCameo(clases_id,solicitante_id,aceptada)
  {
    return this.http.post(this.url + "/cameos", {"clases_id":clases_id, "solicitante_id" : solicitante_id, "aceptada" : aceptada});
  }

  // UNIR MIS CAMEOS DESDE MI PERFIL
  misCameos(solicitante_id:number){
    return this.http.get(this.url + "/miscameos" + "?solicitante_id="+solicitante_id)
  }
  
  infoCameos(usuario_id){
    return this.http.get(this.url + "/infocameos" + "?usuario_id="+usuario_id)
  }
  
  organizarClases(usuario_id)
  {
    return this.http.get(this.url + "?usuario_id=" + usuario_id);
  }

  solicitudes(usuario_id){
    return this.http.get(this.url + "/solicitudes?usuario_id="+usuario_id)
  }

  filtrarBusqueda(titulo)
  {
    return this.http.get(this.url + "/buscar" + "?titulo=" + titulo);
  }

  putEstadoClases(publicada,clases_id)
  {
    return this.http.put(this.url, {"publicada":publicada, "clases_id" : clases_id})
  }

  putEstadoCameos(aceptada,clases_id,solicitante_id)
  {
    return this.http.put(this.url + "/solicitudes", {"aceptada":aceptada, "clases_id":clases_id, "solicitante_id":solicitante_id})
  }
}
