import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/shared/usuario.service';
import { ClasesService } from 'src/app/shared/clases.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private apiService:UsuarioService, private router: Router, private claseService:ClasesService) { }

  loginUsuario(nombre_usuario:string, contrasena:string)
  { 
    this.apiService.login(new Usuario(0,null,null,nombre_usuario,null,contrasena,null)).subscribe((data: Usuario []) =>
    {
      if (!nombre_usuario || !contrasena)
      {
        alert("Debes completar todos los campos")
      }
      // console.log(data)
      else if (data.length == 0)
      {    
        alert("usuario o contraseña erróneo")
      }
      else 
      {
        this.apiService.usuario = data[0]
        console.log(data[0]);        
        this.router.navigateByUrl('/home')
        localStorage.setItem('usuario', JSON.stringify(this.apiService.usuario));
        // console.log(this.apiService.usuario.nombre_usuario);        
      }
    });
  }

  ngOnInit(): void {
  }

}
