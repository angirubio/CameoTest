import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChatService } from 'src/app/shared/chat.service';
import { UsuarioService } from 'src/app/shared/usuario.service';
import { Chat } from '../../models/chat';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor(private apiService:UsuarioService, private chatService:ChatService, private router: Router) { }

  enviar(mensaje: string)
  {
    this.chatService.chat = new Chat(0, this.apiService.usuario.usuario_id, this.apiService.receptor.usuario_id, mensaje)
    this.chatService.postMensaje(this.chatService.chat).subscribe((data) =>
    {
      this.chatService.chat = data[0];
      this.router.navigateByUrl('/chat')
    });
  }

  ngOnInit(): void {
  }

}
