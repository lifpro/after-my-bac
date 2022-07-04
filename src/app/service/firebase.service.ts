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
    const colRef = collection(this.firestore, 'etablissements');
    return collectionData(colRef, { idField: 'id' }) as Observable<Etablissement[]>;
  }

  getEtablissementById(id): Observable<Etablissement> {
    const docRef = doc(this.firestore, `etablissements/${id}`);
    return docData(docRef, { idField: 'id' }) as Observable<Etablissement>;
  }

  addEtablissement(etab: Etablissement) {
    const colRef = collection(this.firestore, 'etablissements');
    return addDoc(colRef, { nom: etab.nom, ml: etab.ml, ms: etab.ms });
  }

  deleteEtablissement(etab: Etablissement) {
    const docRef = doc(this.firestore, `etablissements/${etab.id}`);
    return deleteDoc(docRef);
  }

  updateEtablissement(etab: Etablissement) {
    const docRef = doc(this.firestore, `etablissements/${etab.id}`);
    return updateDoc(docRef, { nom: etab.nom, ml: etab.ml, ms: etab.ms });
  }
}
