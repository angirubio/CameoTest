import { Component, OnInit } from '@angular/core';
import { ClasesService } from 'src/app/shared/clases.service';
import { Clases } from 'src/app/models/clases';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/shared/usuario.service';

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
  public usuario: Usuario;
  public peticiones: Clases[];



  constructor(private claseService: ClasesService, private apiService:UsuarioService) {
    this.claseCssConfirmar = false;
    this.textoBotonConfirmado = false;
    this.usuarioApuntado = false;
    this.colorBoton = false;

    this.claseCssCancelar = false;
    this.textoBotonCancelado = false;
    this.usuarioConfirmado = false;
    this.usuario = this.apiService.usuario;
  }

  public cambiarEstadoConfirmar():void
  {
    this.claseCssConfirmar = !this.claseCssConfirmar
    this.textoBotonConfirmado = !this.textoBotonConfirmado
    this.usuarioApuntado = !this.usuarioApuntado
    this.colorBoton = !this.colorBoton
  }

  
  


  ngOnInit(): void {
    this.claseService.solicitudes(this.apiService.usuario.usuario_id).subscribe((data:Clases[])=>{
      console.log(data)
      console.log(this.apiService.usuario.usuario_id);
      
      this.peticiones = data;
      // this.claseService.solicitudes(this.apiService.usuario.usuario_id).subscribe((data:Clases[])=>{
      //   console.log(data)
      //   this.peticiones = data;
      //   this.router.navigateByUrl('/organizar-clases')
      // }); 

    })
  }

}



