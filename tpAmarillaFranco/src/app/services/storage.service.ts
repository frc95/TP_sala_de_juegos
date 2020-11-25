import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class StorageService {


  constructor(private db : AngularFirestore, private auth : AuthService) { }

  //Puntos
  public TraerListadoOrdenadoPorPuntos(nombreTabla : string)
  {
    return this.db.collection(nombreTabla, ref => ref.orderBy('puntos','desc')).valueChanges();
  }
  public TraerTopPorPuntos(nombreTabla : string)
  {
    return this.db.collection(nombreTabla, ref => ref.orderBy('puntos','desc').limit(3)).valueChanges();
  }
  public TraerPartidasTopUserPuntos(nombreTabla : string)
  {
    return this.db.collection(nombreTabla, ref => ref.where('usuario','==' ,this.auth.getCurrentUser()).orderBy('puntos','desc').limit(3)).valueChanges(); 
  }

  //VIctorias
  public TraerListadoOrdenadoPorVictorias(nombreTabla : string)
  {
    return this.db.collection(nombreTabla, ref => ref.orderBy('victorias','desc')).valueChanges();
  }
  public TraerTopPorVictorias(nombreTabla : string)
  {
    return this.db.collection(nombreTabla, ref => ref.orderBy('victorias','desc').limit(3)).valueChanges();
  }
  public TraerPartidasTopUserVictoria(nombreTabla : string)
  {
    return this.db.collection(nombreTabla, ref => ref.where('usuario','==' ,this.auth.getCurrentUser()).orderBy('victorias','desc').limit(3)).valueChanges(); 
  }
  
  

  //Tiempo
  public TraerListadoOrdenadoPorTiempo(nombreTabla : string, orden : string)
  {
    if(orden=='desc')
    {
      return this.db.collection(nombreTabla, ref => ref.orderBy('tiempo','desc')).valueChanges();
    }
    else if(orden=='asc')
    {
      return this.db.collection(nombreTabla, ref => ref.orderBy('tiempo')).valueChanges();
    }
  }

  public TraerTopPorTiempo(nombreTabla : string, orden : string)
  {
    if(orden=='desc')
    {
      return this.db.collection(nombreTabla, ref => ref.orderBy('tiempo','desc').limit(3)).valueChanges();
    }
    else if(orden=='asc')
    {
      return this.db.collection(nombreTabla, ref => ref.orderBy('tiempo').limit(3)).valueChanges();
    }
  }


  public TraerPartidasTopUserTiempo(nombreTabla : string, orden : string)
  {
    if(orden == 'asc')
    {
      return this.db.collection(nombreTabla, ref => ref.where('usuario','==' ,this.auth.getCurrentUser()).orderBy('tiempo','asc').limit(3)).valueChanges();
    }
    else if(orden == 'desc')
    {
      return this.db.collection(nombreTabla, ref => ref.where('usuario','==' ,this.auth.getCurrentUser()).orderBy('tiempo','desc').limit(3)).valueChanges();
    }
      
  }

  //Partidas del usuario
  public TraerPartidasUser(nombreTabla : string)
  { 
      return this.db.collection(nombreTabla, ref => ref.where('usuario','==' ,this.auth.getCurrentUser())).valueChanges();
  }

}
