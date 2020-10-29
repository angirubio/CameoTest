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
    if (this.clasesGestionar[i].publicada == true) {
      this.claseService.putEstadoClases(false,this.clasesGestionar[i].clases_id).subscribe((data) =>
      {
        this.clasesGestionar[i].publicada = !this.clasesGestionar[i].publicada
      })
    } else{
      this.claseService.putEstadoClases(true,this.clasesGestionar[i].clases_id).subscribe((data) =>
      {
        this.clasesGestionar[i].publicada = !this.clasesGestionar[i].publicada
      })
    }
  }

  ver(i:string)
  {
    this.claseService.clase = this.clasesGestionar[i];
    this.router.navigateByUrl('/publicacion');
  }

  ngOnInit(): void {
    this.apiService.usuario = JSON.parse(localStorage.getItem('usuario'));
    this.claseService.organizarClases(this.apiService.usuario.usuario_id).subscribe((data:Clases[])=>{
      console.log(data)
      this.clasesGestionar = data;
      // this.router.navigateByUrl('/organizar-clases')
      console.log( this.clasesGestionar );
      
    });

     // Obteniendo valores del localstorage para la sesion del objeto
     
     console.log(this.apiService.usuario);

     this.claseService.clase = JSON.parse(localStorage.getItem('clase'));
     console.log(this.claseService.clase);        
     this.clase = this.claseService.clase;
     
  }
}