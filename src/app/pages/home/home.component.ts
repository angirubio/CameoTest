import { Component, OnInit } from '@angular/core';
import { Clases } from 'src/app/models/clases';
import { ClasesService } from 'src/app/shared/clases.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/shared/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public clasesHome: Clases[];
  public usuariosHome: Usuario[];
  constructor(private claseService:ClasesService, private apiService: UsuarioService, private router: Router) { }

// BUSQUEDA DE FILTRADO POR TITULO

  buscar(titulo:string)
  {
    this.claseService.filtrarBusqueda(titulo).subscribe((data:Clases[])=>{
      console.log(data)
      if (data.length === 0)
      {
        alert("Upsss! No hay ninguna coincidencia con tu búsqueda. Prueba a buscar otra cosa!")
      }

      else{
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
    console.log(this.apiService.usuario);    
    this.claseService.clase = this.clasesHome[i];
    this.claseService.clases = this.clasesHome[i];
    this.router.navigateByUrl('/usuario');
  }
  

  ngOnInit(): void {
    this.claseService.getClases().subscribe((data:Clases[])=>{
      this.clasesHome = data;
      this.router.navigateByUrl('/home')
    });
  }
}
