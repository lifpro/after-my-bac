import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  nom: string = 'Mousssa';
  age: number = 45;
  isOk: boolean = true;
  titreClass = "ion-text-uppercase";
  // moyScien: number = 0;
  // moyLitt: number = 0;
  myForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.titreClass = this.titreClass + " ion-text-center";
    // console.log('titreClass=' + this.titreClass);
    this.myForm = this.fb.group({
      moyS: 0,
      moyL: 0
    })
  }
  search() {
    // console.log(`Moyenne scientifique est ${this.moyScien}`);
    // console.log(`Moyenne litteraire est ${this.moyLitt}`);
    console.log(this.myForm.value);
  }

}
