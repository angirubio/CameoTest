import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.all.js';
import { Clases } from 'src/app/models/clases';
import { ClasesService } from 'src/app/shared/clases.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/shared/usuario.service';
import { ChatService } from 'src/app/shared/chat.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public clasesHome: Clases[];
  public usuariosHome: Usuario[];
  constructor(private claseService:ClasesService, private apiService: UsuarioService, private router: Router, private chatService:ChatService, ) { }

// BUSQUEDA DE FILTRADO POR TITULO

  buscar(titulo:string)
  {
    this.claseService.filtrarBusqueda(titulo).subscribe((data:Clases[])=>{
      if (data.length === 0) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'No hay ninguna coincidencia con tu búsqueda. Prueba a buscar otra cosa!'
        });
        
      } else {
        this.clasesHome = data;
        this.router.navigateByUrl('/home')
      }
      
    });
  }

  ver(i:string)
  {
    this.claseService.clase = this.clasesHome[i];
    this.router.navigateByUrl('/publicacion');
  }

// METODO QUE RECOGE EL INDICE DE LA TARJETA DE HOME

  verPerfil(i:string)
  {   
    this.claseService.clase = this.clasesHome[i];    
    this.router.navigateByUrl('/usuario');
  }
  
  abrirChat(i:string){
    this.apiService.receptor = this.clasesHome[i];
    this.router.navigateByUrl('/chat');
  }

  ngOnInit(): void {
    this.claseService.getClases().subscribe((data:Clases[])=>{
      this.clasesHome = data;
      this.router.navigateByUrl('/home')
    });

    // Obteniendo valores del localstorage para la sesion del objeto
    this.apiService.usuario = JSON.parse(localStorage.getItem('usuario'));
    console.log(this.apiService.usuario);
  }
}
