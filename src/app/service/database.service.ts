import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SQLiteObject, SQLite } from '@ionic-native/sqlite';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { Platform } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Etablissement } from '../model/etablissement';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  dbName = 'ambV1.db';
  private database: SQLiteObject;
  private dbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);
  etablissements = new BehaviorSubject([]);
  constructor(private sqlite: SQLite,
    private sqlitePorter: SQLitePorter,
    private plt: Platform,
    private http: HttpClient) {
    this.plt.ready().then(() => {
      if (environment.production) {
        this.sqlite.create({
          name: this.dbName,
          location: 'default'
        }).then((db: SQLiteObject) => {
          this.database = db;
          this.seedDatabase();
          this.dbReady.next(true);
          // alert('Base de donnees créés')
        }).catch((error: Error) => {
          console.log('Error on open or create database: ', error);
          return Promise.reject(error.message || error);
        });
      }

    });
  }
  seedDatabase() {
    this.http.get('assets/dump.sql', { responseType: 'text' })
      .subscribe(sql => {
        this.sqlitePorter.importSqlToDb(this.database, sql)
          .then(_ => {
            this.dbReady.next(true);
          })
          .catch(e => { });
      });
  }

  getDatabaseState() {
    return this.dbReady.asObservable();
  }

  getEtablissements(): Observable<Etablissement[]> {
    return this.etablissements.asObservable();
  }

  loadEtablissements() {
    let list: Etablissement[] = [];
    this.database.executeSql('SELECT * FROM etablissements order by nom', []).then(data => {
      if (data.rows.length > 0) {
        for (let i = 0; i < data.rows.length; i++) {
          list.push(this.dataToEtablissement(data, i));
        }
      }
      this.etablissements.next(list);
    })
      .catch(e => {
        alert("error:" + e)
      });;
  }
  dataToEtablissement(data, i) {
    return {
      id: data.rows.item(i).id,
      nom: data.rows.item(i).nom,
      serie: data.rows.item(i).serie,
      ms: data.rows.item(i).ms,
      ml: data.rows.item(i).ml,
    };
  }

  addEtablissement(item: Etablissement) {
    let data = [item.nom, item.serie, item.ms, item.ml];
    return this.database.executeSql('INSERT INTO etablissements (nom,serie,ms,ml) VALUES (?,?,?,?)', data).then(data => {
      this.loadEtablissements();
    }).catch(e => { });
  }

  updateEtablissement(item: Etablissement) {
    let data = [item.nom, item.serie, item.ms, item.ml];
    return this.database.executeSql(`UPDATE etablissements SET nom = ?,serie = ?,ms = ?,ml = ? WHERE id = ${item.id}`, data).then(data => {
      this.loadEtablissements();
    });
  }
  deleteEtablissement(id: any) {
    return this.database.executeSql('DELETE FROM etablissements WHERE id = ?', [id]).then(_ => {
      this.loadEtablissements();
    });
  }
}
