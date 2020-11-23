import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'


@Injectable({
  providedIn: 'root'
})
export class StorageService {


  constructor(private db : AngularFirestore) { }

  public TraerListado(nombreTabla : string)
  {
    return this.db.collection(nombreTabla).valueChanges();
  }

}
