import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-etablissement',
  templateUrl: './etablissement.page.html',
  styleUrls: ['./etablissement.page.scss'],
})
export class EtablissementPage implements OnInit {
  etabs: { id: number, code: string, libelle: string }[] = [
    { "id": 1, "code": "TC", "libelle": "Technolab" },
    { "id": 2, "code": "SP", "libelle": "Sup management" },
    { "id": 3, "code": "1AM", "libelle": "Iam" },
  ];

  constructor() { }

  ngOnInit() {
  }

}
