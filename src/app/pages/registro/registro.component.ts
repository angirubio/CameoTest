import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/shared/usuario.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  public myForm: FormGroup;

  public default_foto:string = "https://external-preview.redd.it/pkhNGV2Vh3MOUg3tdv0OLfMreVwS3nc-k_6MBrAKG5M.png?auto=webp&s=84e7b522e35d0d2cf13332f28a41a4811010b73b";
  public default_status:string = "nivel: Principiante"
  constructor(private apiService: UsuarioService, private formBuilder: FormBuilder, private router: Router) { 
    this.buildForm();
  }

  public insertarUsuario(){
    let usuario = this.myForm.value;
    this.insertUser(usuario);
  }

  private buildForm()
  {
    const minPassLength = 8;
    const maxPassLength = 20;
    const minWordsLength = 4;
    const maxWordsLength = 30;

    this.myForm = this.formBuilder.group({
      nombre: [, Validators.maxLength(maxWordsLength)],
      apellido: [, Validators.maxLength(maxWordsLength)],
      nombre_usuario: [, Validators.minLength(minWordsLength)],
      email: [, [ Validators.email]],
      contrasena: [, [Validators.minLength(minPassLength), Validators.maxLength(maxPassLength)]],
    });
  }

  insertUser(user:any)
  { 
    this.apiService.postUsuario(new Usuario(0,user.nombre, user.apellido, user.nombre_usuario, user.email, user.contrasena, this.default_foto, this.default_status)).subscribe((data) =>
    {
      console.log(data);
      this.router.navigateByUrl('/home')
    })
  }

  ngOnInit(): void {
  }

}

// nombre, apellido, nombre_usuario, email, contrasena, foto