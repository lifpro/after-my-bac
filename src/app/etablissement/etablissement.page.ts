import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { Etablissement } from '../model/etablissement';
import { DatabaseService } from '../service/database.service';

@Component({
  selector: 'app-etablissement',
  templateUrl: './etablissement.page.html',
  styleUrls: ['./etablissement.page.scss'],
})
export class EtablissementPage implements OnInit {
  etabs2: { id: number, code: string, libelle: string }[] = [
    { "id": 1, "code": "TC", "libelle": "Technolab" },
    { "id": 2, "code": "SP", "libelle": "Sup management" },
    { "id": 3, "code": "1AM", "libelle": "Iam" },
  ];

  etabs: Etablissement[] = [];
  constructor(private plt: Platform, private db: DatabaseService) {
    this.loadList();
  }

  ngOnInit() {
  }
  loadList() {
    if (environment.production) {
      this.db.getDatabaseState().subscribe(rdy => {
        if (rdy) {
          this.db.loadEtablissements();
          this.db.getEtablissements().subscribe(data => {
            this.etabs = data;
          });
        }
      });
    } else {

    }


  }

}
