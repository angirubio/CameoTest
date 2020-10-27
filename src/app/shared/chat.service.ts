import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Chat } from '../models/chat';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  public conversacion: Chat[];
  public chat: Chat;
  private url = "http://localhost:3000/chat"

  constructor(private http: HttpClient) { }

  postMensaje(mensaje: Chat)
  {
    return this.http.post(this.url, mensaje);
  }

  getConversacion(emisor,receptor){
    return this.http.get(this.url+"/conversacion"+"?usuario_id="+emisor+"&receptor_id="+receptor)
  }

  getUsuarios(usuario){
    return this.http.get(this.url+"/usuarios"+"?usuario_id="+usuario)
  }
}
