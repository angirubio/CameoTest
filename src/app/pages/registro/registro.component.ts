import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/shared/usuario.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  public myForm: FormGroup;

  public default_foto:string = "https://cdn2.vectorstock.com/i/thumb-large/23/81/default-avatar-profile-icon-vector-18942381.jpg";
  constructor(private apiService: UsuarioService, private formBuilder: FormBuilder) { 
    this.buildForm();
  }

  public insertarUsuario(){
    let usuario = this.myForm.value;
    this.insertUser(usuario); 
    console.log(usuario);
          
  }

  private buildForm()
  {
    const minPassLength = 8;
    const maxPassLength = 20;

    this.myForm = this.formBuilder.group({
      nombre: [, Validators.required],
      apellido: [, Validators.required],
      nombre_usuario: [, Validators.required],
      email: [, [Validators.required, Validators.email]],
      contrasena: [, [Validators.required, Validators.minLength(minPassLength), Validators.maxLength(maxPassLength)]],
    });
  }

  insertUser(user:any)
  { 
    this.apiService.postUsuario(new Usuario(0,user.nombre, user.apellido, user.nombre_usuario, user.email, user.contrasena, this.default_foto)).subscribe((data) =>
    {
      console.log(data);
    })
  }

  ngOnInit(): void {
  }

}

// nombre, apellido, nombre_usuario, email, contrasena, foto