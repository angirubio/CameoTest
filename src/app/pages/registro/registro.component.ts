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

  // Creo un objeto myForm de tipo predefinido FormGroup de angular
  public myForm: FormGroup;

  public default_foto:string = "https://cdn2.vectorstock.com/i/thumb-large/23/81/default-avatar-profile-icon-vector-18942381.jpg";
  constructor(private apiService: UsuarioService, private formBuilder: FormBuilder, private router: Router) { 
    this.buildForm();
  }

  // Este será el evento que ejecutará onClick
  public insertarUsuario(){
    let usuario = this.myForm.value;
    this.insertUser(usuario);
  }


  // Constructor de las validaciones
  private buildForm()
  {
    const minPassLength = 8;
    const maxPassLength = 20;
    const minWordsLength = 4;
    const maxWordsLength = 30;

    // Guardo las propiedades que se recogen del formulario con el metodo de angular formBuilder.group
    this.myForm = this.formBuilder.group({
      nombre: [, Validators.maxLength(maxWordsLength)],
      apellido: [, Validators.maxLength(maxWordsLength)],
      nombre_usuario: [, Validators.minLength(minWordsLength)],
      email: [, [ Validators.email]],
      contrasena: [, [Validators.minLength(minPassLength), Validators.maxLength(maxPassLength)]],
    });
  }

  // Metodo que llama al servicio para crear el registro 
  insertUser(user:any)
  { 
    this.apiService.postUsuario(new Usuario(0, user.nombre, user.apellido, user.nombre_usuario, user.email, user.contrasena, this.default_foto)).subscribe((data) =>
    {
      console.log(data);

      // metodo definido de angular para que cuando se cumpla la petición redirija a la home
      this.router.navigateByUrl('/home')
    });
  }

  ngOnInit(): void {
  }

}

// nombre, apellido, nombre_usuario, email, contrasena, foto