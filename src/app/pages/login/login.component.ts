import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/shared/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private apiService:UsuarioService, private router: Router) { }

  loginUsuario(nombre_usuario:string, contrasena:string)
  { 
    this.apiService.login(new Usuario(0,null,null,nombre_usuario,null,contrasena,null)).subscribe((data:Usuario) =>
    {
      this.apiService.usuario = data
      this.router.navigateByUrl('/home')
    })
  }

  ngOnInit(): void {
  }

}
