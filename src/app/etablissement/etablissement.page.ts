import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AlertController, Platform } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { Etablissement } from '../model/etablissement';
import { DatabaseService } from '../service/database.service';
import { FirebaseService } from '../service/firebase.service';

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
  constructor(private plt: Platform,
    private db: DatabaseService,
    private fd: FirebaseService,
    private cd: ChangeDetectorRef,
    private alertCtrl: AlertController) {
    this.loadListFromFB();
  }

  ngOnInit() {
    // this.add();
  }
  add() {
    let e: Etablissement = new Etablissement();
    e.nom = 'SUP MANAGEMENT';
    e.serie = 'TLL';
    this.db.getDatabaseState().subscribe(rdy => {
      if (rdy) {
        this.db.addEtablissement(e);
      }
    });
  }
  loadListFromFB() {
    this.fd.getEtablissements().subscribe(res => {
      this.etabs = res;
      this.cd.detectChanges();
    });
  }
  async addEtablissement() {
    const alert = await this.alertCtrl.create({
      header: 'Add Etablissement',
      inputs: [
        {
          name: 'nom',
          placeholder: "Nom de l'établissement",
          type: 'text'
        },
        {
          name: 'ml',
          placeholder: 'Moyenne litteraire',
          type: 'number'
        }
        ,
        {
          name: 'ms',
          placeholder: 'Moyenne scientifique',
          type: 'number'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        }, {
          text: 'Enregistrer',
          handler: res => {
            let e: Etablissement = new Etablissement();
            e.nom = res.nom
            e.ml = res.ml;
            e.ms = res.ms;
            this.fd.addEtablissement(e);
          }
        }
      ]
    });
    await alert.present();
  }
  loadListFromDB() {
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
