import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-perfil-ajeno',
  templateUrl: './perfil-ajeno.component.html',
  styleUrls: ['./perfil-ajeno.component.css']
})
export class PerfilAjenoComponent implements OnInit {
  
  public cameosHidden: boolean;
  public clasesHidden: boolean;

  constructor(public dialog: MatDialog)
  {
    this.cameosHidden = false;
    this.clasesHidden = false;
  }

  hideCameos(){
    this.clasesHidden = true;
  }
  
  hideClases(){
    this.clasesHidden = true;
  }

  ngOnInit(): void {
  }

}