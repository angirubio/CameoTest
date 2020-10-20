import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/shared/usuario.service';

@Component({
  selector: 'app-perfil-propio',
  templateUrl: './perfil-propio.component.html',
  styleUrls: ['./perfil-propio.component.css']
})
export class PerfilPropioComponent implements OnInit {

  public usuario:Usuario = this.apiService.usuario;
  public usuario_update:Usuario;

  constructor(private apiService:UsuarioService, private router: Router) {}

  actualizar(nombre_usuario:string,status:string)
  { 
    if (nombre_usuario == "") {
      nombre_usuario = this.usuario.nombre_usuario
    } else{
      this.usuario.nombre_usuario = nombre_usuario
    }
    if (status == "") {
      status = this.usuario.status
    } else{
      this.usuario.status = status
    }
    
    this.apiService.putUsuario(this.usuario).subscribe((data) =>
      {

        console.log(data);
        
        this.router.navigateByUrl('/perfil')
      })
  }

  actualizar2(nombre:string,apellido:string,email:string,contrasena:string)
  { 
    if (nombre == "") {
      nombre = this.usuario.nombre
    } else{
      this.usuario.nombre = nombre
    }
    if (apellido == "") {
      apellido = this.usuario.apellido
    } else{
      this.usuario.apellido = apellido
    }
    if (email == "") {
      email = this.usuario.email
    } else{
      this.usuario.email = email
    }
    if (contrasena == "") {
      contrasena = this.usuario.contrasena
    } else{
      this.usuario.contrasena = contrasena
    }
    this.apiService.putUsuario(this.usuario).subscribe((data) =>
      {

        console.log(data);
        
        this.router.navigateByUrl('/perfil')
      })
  }

  ngOnInit(): void { }

}