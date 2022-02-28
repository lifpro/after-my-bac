import { Component } from '@angular/core';

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
  moyScien: number = 7;
  constructor() {
    this.titreClass = this.titreClass + " ion-text-center";
    // console.log('titreClass=' + this.titreClass);
  }
  clickMe() {
    this.moyScien = this.moyScien * 2;
    console.log("Bjr, vous venez de clicker sur le bouton rechercher");
  }

}
