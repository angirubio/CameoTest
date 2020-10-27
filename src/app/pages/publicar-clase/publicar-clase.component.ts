import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Clases } from 'src/app/models/clases';
import { UsuarioService } from 'src/app/shared/usuario.service';
import { ClasesService } from 'src/app/shared/clases.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-publicar-clase',
  templateUrl: './publicar-clase.component.html',
  styleUrls: ['./publicar-clase.component.css']
})
export class PublicarClaseComponent implements OnInit { 
  hide = true;
  step = 0;
  

  public default_foto_clase:string = "https://res.cloudinary.com/rebelwalls/image/upload/b_black,c_fill,f_auto,fl_progressive,h_533,q_auto,w_800/v1428566112/article/R11191_image1";
  public id:number = this.apiService.usuario.usuario_id;
  public publicada:boolean = true;
  constructor(private apiService:UsuarioService, private claseService:ClasesService, private router: Router) { }

  // Botones para ir a siguiente
  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }


  // Metodo que me crea un objeto de tipo clases
  publicar(titulo: string, descripcion: string, precio: number, tema: string, habilidad: string, fecha: Date, plataforma: string, foto:string)
  {
    if (foto == ""){
      this.default_foto_clase = foto;
    }
    this.claseService.clase = new Clases(0,titulo,descripcion,precio, tema, habilidad, fecha, plataforma,foto,this.id,this.publicada)
    this.claseService.postClase(this.claseService.clase).subscribe((data) =>
    {
      this.claseService.clase = data[0];
      this.router.navigateByUrl('/organizar-clases')
    });
  }

  ngOnInit(): void { }
  }


