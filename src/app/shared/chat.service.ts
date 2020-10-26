import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Chat } from '../models/chat';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  public chat: Chat;
  private url = "http://localhost:3000/chat"

  constructor(private http: HttpClient) { }

  postMensaje(mensaje: Chat)
  {
    return this.http.post(this.url, mensaje);
  }
}
