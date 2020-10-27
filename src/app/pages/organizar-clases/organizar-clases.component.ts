import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Clases } from 'src/app/models/clases';
import { ClasesService } from 'src/app/shared/clases.service';
import { UsuarioService } from 'src/app/shared/usuario.service';

@Component({
  selector: 'app-organizar-clases',
  templateUrl: './organizar-clases.component.html',
  styleUrls: ['./organizar-clases.component.css']
})
export class OrganizarClasesComponent implements OnInit {
  public clasesGestionar: Clases[]
  public clase:Clases = this.claseService.clase;
  
  constructor(private apiService:UsuarioService, private router: Router, private claseService:ClasesService) { }

  public cambiarEstadoClase(i:number):void
  {
    this.clasesGestionar[i].publicada = !this.clasesGestionar[i].publicada
  }

  ver(i:string)
  {
    this.claseService.clase = this.clasesGestionar[i];
    this.router.navigateByUrl('/publicacion');
  }

  ngOnInit(): void {
    this.claseService.organizarClases(this.apiService.usuario.usuario_id).subscribe((data:Clases[])=>{
      console.log(data)
      this.clasesGestionar = data;
      this.router.navigateByUrl('/organizar-clases')
    });
  }
}