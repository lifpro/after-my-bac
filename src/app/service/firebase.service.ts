import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, docData, addDoc, deleteDoc, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Etablissement } from '../model/etablissement';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  constructor(private firestore: Firestore) { }

  getEtablissements(): Observable<Etablissement[]> {
    const EtablissementsRef = collection(this.firestore, 'etablissements');
    return collectionData(EtablissementsRef, { idField: 'id' }) as Observable<Etablissement[]>;
  }

  getEtablissementById(id): Observable<Etablissement> {
    const EtablissementDocRef = doc(this.firestore, `etablissements/${id}`);
    return docData(EtablissementDocRef, { idField: 'id' }) as Observable<Etablissement>;
  }

  addEtablissement(etab: Etablissement) {
    const EtablissementsRef = collection(this.firestore, 'etablissements');
    return addDoc(EtablissementsRef, { nom: etab.nom, ml: etab.ml, ms: etab.ms });
  }

  deleteEtablissement(etab: Etablissement) {
    const EtablissementDocRef = doc(this.firestore, `etablissements/${etab.id}`);
    return deleteDoc(EtablissementDocRef);
  }

  updateEtablissement(etab: Etablissement) {
    const EtablissementDocRef = doc(this.firestore, `etablissements/${etab.id}`);
    return updateDoc(EtablissementDocRef, { nom: etab.nom, ml: etab.ml, ms: etab.ms });
  }
}
