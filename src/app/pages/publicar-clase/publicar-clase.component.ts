import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Clases } from 'src/app/models/clases';

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

  public clase: Clases = null;

  constructor() {}

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
  terminar(titulo: string, descripcion: string, precio: number, tema: string, habilidad: string, fecha: Date ){
    console.log(titulo, descripcion, precio, tema, habilidad, fecha);   
    this.clase = new Clases(0,titulo,descripcion,precio, tema, habilidad, fecha)
  }

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


