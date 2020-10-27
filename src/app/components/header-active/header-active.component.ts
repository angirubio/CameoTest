import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/shared/usuario.service';

@Component({
  selector: 'app-header-active',
  templateUrl: './header-active.component.html',
  styleUrls: ['./header-active.component.css']
})
export class HeaderActiveComponent implements OnInit {
  
  // selected = 'option2';

  constructor(private apiService:UsuarioService, private router: Router) { }

  ngOnInit(): void {
  }

}
