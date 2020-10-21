import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-peticiones-clase',
  templateUrl: './peticiones-clase.component.html',
  styleUrls: ['./peticiones-clase.component.css']
})
export class PeticionesClaseComponent implements OnInit {

  public claseCssConfirmar: boolean;
  public textoBotonConfirmado: boolean;
  public usuarioApuntado: boolean;
  public colorBoton: boolean;

  public claseCssCancelar: boolean;
  public textoBotonCancelado: boolean;
  public usuarioConfirmado: boolean;



  constructor() {
    this.claseCssConfirmar = false;
    this.textoBotonConfirmado = false;
    this.usuarioApuntado = false;
    this.colorBoton = false;

    this.claseCssCancelar = false;
    this.textoBotonCancelado = false;
    this.usuarioConfirmado = false;
  }

  public cambiarEstadoConfirmar():void
  {
    this.claseCssConfirmar = !this.claseCssConfirmar
    this.textoBotonConfirmado = !this.textoBotonConfirmado
    this.usuarioApuntado = !this.usuarioApuntado
    this.colorBoton = !this.colorBoton
  }

  
  


  ngOnInit(): void {
  }

}
