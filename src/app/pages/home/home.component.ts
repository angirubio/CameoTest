import { Component, OnInit } from '@angular/core';
import { Clases } from 'src/app/models/clases';
import { ClasesService } from 'src/app/shared/clases.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public clasesHome: Clases[]
  constructor(private claseService:ClasesService, private router: Router) { }

  buscar(titulo:string)
  {
    this.claseService.filtrarBusqueda(titulo).subscribe((data:Clases[])=>{
      console.log(data)
      this.clasesHome = data;
      this.router.navigateByUrl('/home')
    });
  }

  ver(i:string)
  {
    this.claseService.clase = this.clasesHome[i];
    this.router.navigateByUrl('/publicacion');
  }

  ngOnInit(): void {
    this.claseService.getClases().subscribe((data:Clases[])=>{
      this.clasesHome = data;
      this.router.navigateByUrl('/home')
    });
  }
}
