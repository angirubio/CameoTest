import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ClasesService } from 'src/app/shared/clases.service';
import { Clases } from 'src/app/models/clases';


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
  // public clasesHome: Clases;
  public misCameos: any[];

  constructor(public dialog: MatDialog, private claseService: ClasesService)
  {
    this.cameosHidden = false;
    this.clasesHidden = false;

    // Guardo en el objeto usuario toda la informacion desde mi servicio que tiene en el get 
    // que me guarda todos los datos del objeto
    this.usuario = this.claseService.clase;
    // this.clases = this.claseService.clases;

    // this.claseUsuario = this.claseService.clases;
  }

  hideCameos(){
    this.clasesHidden = true;
  }
  
  hideClases(){
    this.clasesHidden = true;
  }

  ngOnInit(): void {
    // Prueba para ver que esta funcionado el objeto creado...
    console.log(this.usuario, "hola"); 

    // CREANDO DESDE SERVICIO LA VISTA DE LAS CLASES
     this.claseService.organizarClases(this.usuario.usuario_id).subscribe((data:Clases[]) => {
       console.log(data, "nuevo");
       this.claseUsuario = data;
     });

     // CREANDO DESDE SERVICIO LA VISTA DE MIS CAMEOS REALIZADOS
     this.claseService.misCameos(this.usuario.usuario_id).subscribe((data: any[]) => {
       this.misCameos = data;
       console.log(data, "desde cameos");
     });
  }

}