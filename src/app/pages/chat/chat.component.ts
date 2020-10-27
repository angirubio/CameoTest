import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { ChatService } from 'src/app/shared/chat.service';
import { UsuarioService } from 'src/app/shared/usuario.service';
import { Chat } from '../../models/chat';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  public conver:Chat[];
  public usuarios:Usuario[]
  public emisor:Usuario;
  public receptor:Usuario;
  constructor(private apiService:UsuarioService, private chatService:ChatService, private router: Router) {
    this.emisor = this.apiService.usuario;
    this.receptor = this.apiService.receptor;
  }

  abrir(i:number){
    this.receptor = this.usuarios[i];
    this.chatService.getConversacion(this.emisor.usuario_id,this.receptor.usuario_id).subscribe((data:Chat[])=>{
      this.conver = data;
      this.router.navigateByUrl('/chat')
    });
  }

  enviar(mensaje: string)
  {
    this.conver.push(new Chat(0, this.emisor.usuario_id, this.receptor.usuario_id, mensaje))
    this.chatService.chat = new Chat(0, this.emisor.usuario_id, this.receptor.usuario_id, mensaje)
    this.chatService.postMensaje(this.chatService.chat).subscribe((data) =>
    {
      console.log(data);
    });
  }

  ngOnInit(): void {
    this.chatService.getUsuarios(this.emisor.usuario_id).subscribe((data:Usuario[])=>{
      this.usuarios = data;
      this.receptor = this.usuarios[0];
      this.chatService.getConversacion(this.emisor.usuario_id,this.receptor.usuario_id).subscribe((data:Chat[])=>{
        this.conver = data;
      });
    });
  }
}