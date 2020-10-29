import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ClasesService } from 'src/app/shared/clases.service';
import { Clases } from 'src/app/models/clases';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/shared/usuario.service';


@Component({
  selector: 'app-perfil-ajeno',
  templateUrl: './perfil-ajeno.component.html',
  styleUrls: ['./perfil-ajeno.component.css']
})
export class PerfilAjenoComponent implements OnInit {
  
  public cameosHidden: boolean;
  public clasesHidden: boolean;
  public usuario;
  public claseUsuario: Clases[];
  public misCameos: any[];

  constructor(public dialog: MatDialog, private claseService: ClasesService, private apiService: UsuarioService, private router: Router )
  {
    this.cameosHidden = false;
    this.clasesHidden = false;

    // Guardo en el objeto usuario toda la informacion desde mi servicio que tiene en el get 
    // que me guarda todos los datos del objeto
    this.usuario = this.claseService.clase;
    // this.clases = this.claseService.clases;

    this.claseUsuario = this.claseService.clases;
  }

  hideCameos(){
    this.clasesHidden = true;
  }
  
  hideClases(){
    this.clasesHidden = true;
  }


  verClase(i:string){ // METODO PARA REDIRIGIR EL USUARIO A LAS CLASES
    this.claseService.clase = this.claseUsuario[i];
    this.router.navigateByUrl('/publicacion')
  }

  ngOnInit(): void {// CREANDO DESDE SERVICIO LA VISTA DE LAS CLASES
     this.claseService.organizarClases(this.usuario.usuario_id).subscribe((data:Clases[]) => {
       this.claseUsuario = data;
       console.log(data);
       
     });

     // CREANDO DESDE SERVICIO LA VISTA DE MIS CAMEOS REALIZADOS
     this.claseService.misCameos(this.usuario.usuario_id).subscribe((data: any[]) => {
       this.misCameos = data;
     });

     // Obteniendo valores del localstorage para la sesion del objeto
    this.apiService.usuario = JSON.parse(localStorage.getItem('usuario'));
    console.log(this.apiService.usuario);
  }

}