import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/shared/usuario.service';
import { ClasesService } from 'src/app/shared/clases.service';
import {EncrDecrService} from '../../shared/encr-decr-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private apiService:UsuarioService, private router: Router, private claseService:ClasesService, private EncrDecr: EncrDecrService) { }

  loginUsuario(nombre_usuario:string, contrasena:string)
  { 
    console.log("Contraseña insertada normal: " + contrasena)
    let encrypted = this.EncrDecr.set('123456$#@$^@1ERF', contrasena);
    console.log('Contraseña pasada por método de encriptado para comparar con la almacenada en bbdd: ' + encrypted);    
    
    this.apiService.login(new Usuario(0,null,null,nombre_usuario,null,encrypted,null)).subscribe((data: Usuario []) =>
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
        this.router.navigateByUrl('/home')
      }
    })
  }

  ngOnInit(): void {
    
  }

}