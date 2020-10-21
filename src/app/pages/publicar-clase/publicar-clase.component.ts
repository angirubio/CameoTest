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
  // firstFormGroup: FormGroup;
  // secondFormGroup: FormGroup;
  // isEditable = false;  
  hide = true;
  step = 0;

  public default_foto_clase:string = "https://external-preview.redd.it/pkhNGV2Vh3MOUg3tdv0OLfMreVwS3nc-k_6MBrAKG5M.png?auto=webp&s=84e7b522e35d0d2cf13332f28a41a4811010b73b";
  public id:number = this.apiService.usuario.usuario_id;
  constructor(private apiService:UsuarioService, private claseService:ClasesService, private router: Router,) {
  }

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
  terminar(titulo: string, descripcion: string, precio: number, tema: string, habilidad: string, fecha: Date, plataforma: string){
    
    this.claseService.clase = new Clases(0,titulo,descripcion,precio, tema, habilidad, fecha, plataforma,this.default_foto_clase,this.id)
    console.log(this.claseService.clase);
    
    this.claseService.postClase(this.claseService.clase).subscribe((data) =>
  {
    this.claseService.clase = data[0];
    console.log(data);
    this.router.navigateByUrl('/organizar-clases')
  });
  }

  // Metodo para publicar clase

  

  ngOnInit(): void {
      // this.firstFormGroup = this.formBuilder.group({
      //   titulo: ['', Validators.required],
      //   tipoClase: ['', Validators.required],
      // });
      // this.secondFormGroup = this.formBuilder.group({
      //   plataforma: ['', Validators.required]
      // });
    }
  }


