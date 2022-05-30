import { Component } from '@angular/core';
import { EtablissementServiceService } from '../service/etablissement-service.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  etabListe: any;
  meschoix: { id: number, etab: string, filiere: string }[] = [
    { "id": 1, "etab": "Technolab", "filiere": "Génie logiciel" },
    { "id": 2, "etab": "Sup management", "filiere": "Marketing" },
    { "id": 3, "etab": "Iam", "filiere": "Management" },
  ];

  constructor(public etbsrv: EtablissementServiceService) {
    this.etbsrv.getEtablissements().subscribe(data => {
      this.etabListe = this.formatData(data);
      console.log(data);
    });
    this.meschoix.forEach(element => {

    });
  }
  formatData(data): any[] | any {
    if (data && data.hasOwnProperty('content')) {
      return data.content;
    } else {
      return data;
    }
  }
  ajouter() {

  }

}
