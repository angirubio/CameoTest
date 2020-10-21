import { Component, OnInit } from '@angular/core';
import { Clases } from 'src/app/models/clases';
import { ClasesService } from 'src/app/shared/clases.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public clasesHome: Clases[]

  constructor(private claseService:ClasesService) { }

  ngOnInit(): void {
    this.claseService.getClases().subscribe((data:Clases[])=>{
      this.clasesHome = data
      console.log(this.clasesHome);  
    });
  }
}
