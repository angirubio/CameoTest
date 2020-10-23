import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { Clases } from 'src/app/models/clases';
import { ClasesService } from 'src/app/shared/clases.service';
import { UsuarioService } from 'src/app/shared/usuario.service';
@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})
export class PublicacionComponent implements OnInit {
  isEditable = false;  
  hide = true;
  step = 0;
  public usuario:Usuario = this.apiService.usuario;
  public clasePublicacion:Clases;
  constructor( private apiService:UsuarioService, private router: Router, private claseService:ClasesService )
  {
    this.clasePublicacion = this.claseService.clase;
  }
  setStep(index: number) {
    this.step = index;
  }
  nextStep() {
    this.step++;
  }
  prevStep() {
    this.step--;
  }
  apuntarse()
  {
    console.log(this.clasePublicacion);
    this.claseService.postCameo(this.clasePublicacion.clases_id,this.usuario.usuario_id).subscribe((data) =>
    {
      console.log(data);
      this.router.navigateByUrl('/mis-cameos')
    })
  }
  ngOnInit(): void {
    console.log(this.clasePublicacion);    
  }
}