import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-organizar-clases',
  templateUrl: './organizar-clases.component.html',
  styleUrls: ['./organizar-clases.component.css']
})
export class OrganizarClasesComponent implements OnInit {

  public claseCssPublicada: boolean;

  constructor() {
    this.claseCssPublicada = false;
  }

  public cambiarEstadoConfirmar():void
  { 
    this.claseCssPublicada = !this.claseCssPublicada
    
  }



  ngOnInit(): void {
  }

}
