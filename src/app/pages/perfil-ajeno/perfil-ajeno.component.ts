import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ClasesService } from 'src/app/shared/clases.service';


@Component({
  selector: 'app-perfil-ajeno',
  templateUrl: './perfil-ajeno.component.html',
  styleUrls: ['./perfil-ajeno.component.css']
})
export class PerfilAjenoComponent implements OnInit {
  
  public cameosHidden: boolean;
  public clasesHidden: boolean;
  public usuario;

  constructor(public dialog: MatDialog, private claseService: ClasesService)
  {
    this.cameosHidden = false;
    this.clasesHidden = false;

    // Guardo en el objeto usuario toda la informacion desde mi servicio que tiene en el get 
    // que me guarda todos los datos del objeto
    this.usuario = this.claseService.clase;
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
    
  }

}