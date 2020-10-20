import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/shared/usuario.service';

@Component({
  selector: 'app-perfil-propio',
  templateUrl: './perfil-propio.component.html',
  styleUrls: ['./perfil-propio.component.css']
})
export class PerfilPropioComponent implements OnInit {

  usuario:Usuario = this.apiService.usuario;
  public usuario_update:Usuario;

  constructor(private _formBuilder: FormBuilder, private apiService:UsuarioService, private router: Router) {}

  actualizar(nombre_up:string,apellido_up:string,nombre_usuario_up:string,email_up:string,contrasena_up:string,foto_up:string,status_up:string)
  {console.log(nombre_up);
  
    this.apiService.putUsuario(this.apiService.usuario).subscribe((data:Usuario[]) =>
    {console.log(data);
    
      this.usuario_update = data[0];

      if (nombre_up === "") {
        nombre_up = this.usuario_update.nombre
      }
      if (apellido_up === "") {
        apellido_up = this.usuario_update.apellido
      }
      if (nombre_usuario_up === "") {
        nombre_usuario_up = this.usuario_update.nombre_usuario
      }
      if (email_up === "") {
        email_up = this.usuario_update.email
      }
      if (contrasena_up === "") {
        contrasena_up = this.usuario_update.contrasena
      }
      if (foto_up === "") {
        foto_up = this.usuario_update.foto
      }
      if (status_up === "") {
        status_up = this.usuario_update.status
      }
      this.apiService.putUsuario(new Usuario(0,nombre_up,apellido_up,nombre_usuario_up,email_up,contrasena_up,foto_up,status_up)).subscribe((data) =>
      {
        console.log(data);
        this.router.navigateByUrl('/perfil')
      })
    })
  }

  ngOnInit(): void { }

}