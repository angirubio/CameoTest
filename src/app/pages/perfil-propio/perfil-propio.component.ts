import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.all.js';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/shared/usuario.service';
import {EncrDecrService} from '../../shared/encr-decr-service.service';

@Component({
  selector: 'app-perfil-propio',
  templateUrl: './perfil-propio.component.html',
  styleUrls: ['./perfil-propio.component.css']
})
export class PerfilPropioComponent implements OnInit {

  public usuario:Usuario = this.apiService.usuario;
  public usuario_update:Usuario;

  constructor(private apiService:UsuarioService, private EncrDecr:EncrDecrService, private router: Router) {
    this.usuario.contrasena = this.EncrDecr.get('123456$#@$^@1ERF', this.usuario.contrasena);
  }

  actualizarBasicos(nombre_usuario:string,status:string,fotousuario:string)
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
    if (fotousuario == "") {
      fotousuario = this.usuario.fotousuario
    } else{
      this.usuario.fotousuario = fotousuario
    }
    
    this.apiService.putUsuario(this.usuario).subscribe((data) =>
      {
        this.router.navigateByUrl('/perfil')
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Datos perfil actualizados correctamente',
          showConfirmButton: false,
          timer: 1500
        });
      });
  }

  actualizarCuenta(nombre:string,apellido:string,email:string,contrasena:string)
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
      // this.usuario.contrasena = contrasena
      this.usuario.contrasena = this.EncrDecr.set('123456$#@$^@1ERF', contrasena);
    }
    this.apiService.putUsuario(this.usuario).subscribe((data) =>
      {
        this.router.navigateByUrl('/perfil')
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Cuenta actualizada correctamente!',
          showConfirmButton: false,
          timer: 1500
        });
      })
  }

  ngOnInit(): void { 
      // Obteniendo valores del localstorage para la sesion del objeto
      this.apiService.usuario = JSON.parse(localStorage.getItem('usuario'));
      console.log(this.apiService.usuario);
      this.usuario= this.apiService.usuario;

  }

}