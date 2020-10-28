import { Component, OnInit } from '@angular/core';
import { ClasesService } from 'src/app/shared/clases.service';
import { Clases } from 'src/app/models/clases';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/shared/usuario.service';

@Component({
  selector: 'app-peticiones-clase',
  templateUrl: './peticiones-clase.component.html',
  styleUrls: ['./peticiones-clase.component.css']
})
export class PeticionesClaseComponent implements OnInit {

  public usuario: Usuario;
  public peticiones: any[];

  constructor(private claseService: ClasesService, private apiService:UsuarioService) {
  
    this.usuario = this.apiService.usuario;
  }

  public cambiarEstadoConfirmar(i:number):void
  {
    if (this.peticiones[i].aceptada == true) {
      this.claseService.putEstadoCameos(false,this.peticiones[i].clases_id,this.peticiones[i].solicitante_id).subscribe((data) =>
      {
        this.peticiones[i].aceptada = !this.peticiones[i].aceptada
      })
    } else{
      this.claseService.putEstadoCameos(true,this.peticiones[i].clases_id,this.peticiones[i].solicitante_id).subscribe((data) =>
      {
        this.peticiones[i].aceptada = !this.peticiones[i].aceptada
      })
    }
  }

  ngOnInit(): void {
    this.claseService.solicitudes(this.apiService.usuario.usuario_id).subscribe((data:any[])=>{  
      this.peticiones = data;
    });
  }
}



