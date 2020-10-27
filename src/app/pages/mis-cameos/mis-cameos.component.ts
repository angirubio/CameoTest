import { Component, OnInit } from '@angular/core';
import { ClasesService } from 'src/app/shared/clases.service';

@Component({
  selector: 'app-mis-cameos',
  templateUrl: './mis-cameos.component.html',
  styleUrls: ['./mis-cameos.component.css']
})
export class MisCameosComponent implements OnInit {
  cameos: any[];
  usuario: any;

  constructor(private claseService: ClasesService) {
    this.usuario = this.claseService.clases;
   }

  ngOnInit(): void {
     // CREANDO DESDE SERVICIO LA VISTA DE MIS CAMEOS REALIZADOS
     this.claseService.misCameos(this.usuario.usuario_id).subscribe((data: any[]) => {
      this.cameos = data;
      console.log(data, "desde mis cameos");
    });
  }

}
