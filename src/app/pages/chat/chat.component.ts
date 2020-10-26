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

  public enviados:Chat[];
  public recibidos:Chat[];
  public mandado:Chat;
  public usuarios:Usuario[]
  public receptor:Usuario;
  constructor(private apiService:UsuarioService, private chatService:ChatService, private router: Router) {
    this.receptor = this.apiService.receptor;
  }

  abrir(i:number){
    this.receptor = this.usuarios[i];
    this.router.navigateByUrl('/chat');
  }

  enviar(mensaje: string)
  {
    this.chatService.chat = new Chat(0, this.apiService.usuario.usuario_id, this.apiService.receptor.usuario_id, mensaje)
    this.chatService.postMensaje(this.chatService.chat).subscribe((data) =>
    {
      this.chatService.getMensajesEnviados(this.apiService.usuario.usuario_id,this.apiService.receptor.usuario_id).subscribe((data:Chat[])=>{
        this.enviados = data;
        this.router.navigateByUrl('/chat')
      });
    });
  }

  ngOnInit(): void {
    this.chatService.getUsuarios(this.apiService.usuario.usuario_id).subscribe((data:Usuario[])=>{
      this.usuarios = data;
      this.router.navigateByUrl('/chat')
    });
    this.chatService.getMensajesEnviados(this.apiService.usuario.usuario_id,this.apiService.receptor.usuario_id).subscribe((data:Chat[])=>{
      this.enviados = data;
      this.router.navigateByUrl('/chat')
    });
    this.chatService.getMensajesRecibidos(this.apiService.receptor.usuario_id,this.apiService.usuario.usuario_id).subscribe((data:Chat[])=>{
      this.recibidos = data;
      this.router.navigateByUrl('/chat')
    });
  }

}
