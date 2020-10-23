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
  public claseCssPublicada: boolean;
  public estaPublicada: boolean;
  public clasesGestionar: Clases[]
  
  constructor(private apiService:UsuarioService, private router: Router, private claseService:ClasesService) {
    this.claseCssPublicada = false;
    this.estaPublicada = false; 
  }

  public cambiarEstadoClase(i:number):void
  {
    this.claseCssPublicada[i] = !this.claseCssPublicada[i]
    this.estaPublicada[i] = !this.estaPublicada[i]
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