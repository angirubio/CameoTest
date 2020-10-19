import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/shared/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  public default_foto:string = "https://cdn2.vectorstock.com/i/thumb-large/23/81/default-avatar-profile-icon-vector-18942381.jpg";
  constructor(private apiService: UsuarioService) { }

  insertarUsuario(nombre:string, apellido:string, email:string, nombre_usuario:string, contrasena:string)
  { 
    this.apiService.postUsuario(new Usuario(0,nombre,apellido, nombre_usuario, email, contrasena,this.default_foto)).subscribe((data) =>
    {
      console.log(data);
    })
  }

  ngOnInit(): void {
  }

}

// nombre, apellido, nombre_usuario, email, contrasena, foto