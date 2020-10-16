import { Component, OnInit } from '@angular/core';
import { Clase } from '../../models/clase'

@Component({
  selector: 'app-peticiones-clase',
  templateUrl: './peticiones-clase.component.html',
  styleUrls: ['./peticiones-clase.component.css']
})
export class PeticionesClaseComponent implements OnInit {
  
  public claseConfirmada: string;
  public clase:Clase = {
    clase_id:0,
    titulo:"",
    confirmada:false};
    
  constructor() { }

  confirmar(){
    this.claseConfirmada = 'claseConfirmated';
    this.clase.confirmada = true;
  }

  ngOnInit(): void {
  }

}
