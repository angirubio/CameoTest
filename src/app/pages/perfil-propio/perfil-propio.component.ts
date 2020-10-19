import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-perfil-propio',
  templateUrl: './perfil-propio.component.html',
  styleUrls: ['./perfil-propio.component.css']
})
export class PerfilPropioComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isEditable = false;  
  hide = true;
  step = 0;

  constructor(private _formBuilder: FormBuilder) {}

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required]
    });
  }

}