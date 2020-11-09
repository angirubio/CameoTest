import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.all.js';
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
        Swal.fire({
          title: '¿Estás seguro?',
          text: "Si ocultas una clase ya no será visible para los otros usuarios",
          icon: 'warning',
          showCancelButton: false,
          confirmButtonColor: 'black',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si, ocultar!'
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              'Clase oculta!',
              'Ahora tu clase no está visible para los otros usuarios',
              'success'
            )
          }
        })
        this.clasesGestionar[i].publicada = !this.clasesGestionar[i].publicada
      })
    } else{
      this.claseService.putEstadoClases(true,this.clasesGestionar[i].clases_id).subscribe((data) =>
      {
        Swal.fire({
          title: '¿Estás seguro?',
          text: "Si publicas una clase será visible para los otros usuarios",
          icon: 'warning',
          showCancelButton: false,
          confirmButtonColor: 'black',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Sí, publicar!'
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              'Clase publicada!',
              'Ahora tu clase está visible para los otros usuarios',
              'success'
            )
          }
        })
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
      if (data.length == 0)
      {
      }
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