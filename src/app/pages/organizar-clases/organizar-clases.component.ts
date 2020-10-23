import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-organizar-clases',
  templateUrl: './organizar-clases.component.html',
  styleUrls: ['./organizar-clases.component.css']
})
export class OrganizarClasesComponent implements OnInit {
  public claseCssPublicada: boolean;
  public estaPublicada: boolean;
  constructor() {
    this.claseCssPublicada = false;
    this.estaPublicada = false; 
  }
  public cambiarEstadoClase():void
  { 
    this.claseCssPublicada = !this.claseCssPublicada
    this.estaPublicada = !this.estaPublicada
  }
  ngOnInit(): void {
  }
}