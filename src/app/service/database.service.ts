import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SQLiteObject } from '@ionic-native/sqlite';
import { SQLite } from '@ionic-native/sqlite/ngx';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { Platform } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  dbName = 'ambV1.db';
  private database: SQLiteObject;
  private dbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);
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

}
