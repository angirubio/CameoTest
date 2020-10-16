import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-ajeno',
  templateUrl: './perfil-ajeno.component.html',
  styleUrls: ['./perfil-ajeno.component.css']
})
export class PerfilAjenoComponent implements OnInit {
  
  public cameosHidden: boolean;
  public clasesHidden: boolean;

  constructor()
  {
    this.cameosHidden = false;
    this.clasesHidden = false;
  }

  hideCameos(){
    this.cameosHidden = true;
  }
  hideClases(){
    this.clasesHidden = true;
  }

  ngOnInit(): void {
  }

}
