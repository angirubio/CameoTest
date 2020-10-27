import { Component, OnInit } from '@angular/core';
import { ClasesService } from 'src/app/shared/clases.service';
import { UsuarioService } from 'src/app/shared/usuario.service';
import { Usuario } from 'src/app/models/usuario';
import { Clases } from 'src/app/models/clases';

@Component({
  selector: 'app-mis-cameos',
  templateUrl: './mis-cameos.component.html',
  styleUrls: ['./mis-cameos.component.css']
})
export class MisCameosComponent implements OnInit {
  cameos: any[];
  usuario: Usuario;

  constructor(private claseService: ClasesService, private apiService:UsuarioService) {
    this.usuario = this.apiService.usuario;
   }

  ngOnInit(): void {
     // CREANDO DESDE SERVICIO LA VISTA DE MIS CAMEOS
     this.claseService.misCameos(this.usuario.usuario_id).subscribe((data: any[]) => {
       console.log(this.usuario.usuario_id);       
      this.cameos = data;
      console.log(data, "desde mis cameos");
    });
  }

}
