import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-publicar-clase',
  templateUrl: './publicar-clase.component.html',
  styleUrls: ['./publicar-clase.component.css']
})
export class PublicarClaseComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isEditable = false;  
  hide = true;
  step = 0;

  constructor(private formBuilder: FormBuilder) {}

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
      this.firstFormGroup = this.formBuilder.group({
        tipoClase: ['', Validators.required]
      });
      this.secondFormGroup = this.formBuilder.group({
        secondCtrl: ['', Validators.required]
      });
    }
  }


