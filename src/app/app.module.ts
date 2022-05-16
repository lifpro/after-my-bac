import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncadreDirective } from './directive/encadre.directive';
import { HttpClientModule } from '@angular/common/http';

const firebaseConfig = {
  apiKey: "AIzaSyCfBo2xb0u3L126HrhZ_E9OR1M6xy5fJW8",
  authDomain: "aftermybac.firebaseapp.com",
  projectId: "aftermybac",
  storageBucket: "aftermybac.appspot.com",
  messagingSenderId: "935035845592",
  appId: "1:935035845592:web:1552fdf6b421a69abf10ad"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(),
    HttpClientModule,
    // AngularFireModule.initializeApp(firebaseConfig),
    // AngularFireDatabaseModule,
    // AngularFireStorageModule,
    // AngularFireAuthModule,
    AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }
