import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public userData: Observable<firebase.User>;
  authState=null;

  constructor(private auth : AngularFireAuth, private route : Router, private db : AngularFirestore) { 
    this.userData=this.auth.authState;

    this.auth.authState.subscribe(state=>{
      this.authState=state;
    });
    
  }

  AuthLogin(form)
  {
    //return this.auth.signInWithEmailAndPassword(form.value.email,form.value.password);
    return new Promise((resolve, rejected) =>{
      this.auth.signInWithEmailAndPassword(form.value.email,form.value.password)
      .then(user => {
        resolve(user);
      })
      .catch(error => rejected(error));
    })
  }

  AuthLogout()
  {
    this.auth.signOut();
  }

  ObtenerEmail()
  {
    return this.auth.authState.pipe(map(auth=>auth));
  }

  AuthRegistrar(form)
  {
    return new Promise((resolve,rejected)=>{
      this.auth.createUserWithEmailAndPassword(form.value.email, form.value.password)
      .then(user=>{
        let fecha = Date.now();
        this.db.collection("usuarios").doc(form.value.email+"."+fecha).set({
          id: form.value.email+"."+fecha,
          email: form.value.email,
          password: form.value.password,
          fecha: fecha
        });
        resolve(user);
      })
      .catch(error => rejected(error));
    });
  }

  GuardarPartidaPPT(victorias:number,derrotas:number,empates:number)
  {
    let total=(victorias*3)+(empates);
    let fecha = Date.now();
    let id = this.getCurrentUser() + "." + fecha + ".ppt";
    this.db.collection("PPT").doc(id).set({
      id:id,
      usuario: this.getCurrentUser(),
      fecha: fecha,
      victorias : victorias,
      derrotas : derrotas,
      empates : empates,
      puntos : total
    });
    
  }

  GuardarPartidaTateti(victorias:number,derrotas:number,empates:number)
  {
    let total=(victorias*3)+(empates);
    let fecha = Date.now();
    let id = this.getCurrentUser() + "." + fecha + ".teteti";
    this.db.collection("tateti").doc(id).set({
      id:id,
      usuario: this.getCurrentUser(),
      fecha: fecha,
      victorias : victorias,
      derrotas : derrotas,
      empates : empates,
      puntos : total
    });
    
  }

  GuardarPartidaAdivinaNumero(victorias:number)
  {
    let fecha = Date.now();
    let id = this.getCurrentUser()+ fecha + ".adivina";
    
    this.db.collection("adivina").doc(id).set({
      id:id,
      usuario: this.getCurrentUser(),
      fecha: fecha,
      victorias : victorias,
      
    });
    
  }

  GuardarPartidaAgilidadArimetica(victorias:number, time:number)
  {
    let fecha = Date.now();
    let id = this.getCurrentUser()+ fecha + ".agilidad";
    
    this.db.collection("agilidad").doc(id).set({
      id:id,
      usuario: this.getCurrentUser(),
      fecha: fecha,
      victorias : victorias,
      tiempo : time
      
    });
  }

  GuardarPartidaMemotest(time:number)
  {
    let fecha = Date.now();
    let id = this.getCurrentUser()+ fecha + ".memotest";
    
    this.db.collection("memotest").doc(id).set({
      id:id,
      usuario: this.getCurrentUser(),
      fecha: fecha,
      tiempo : time
      
    });
  }

  GuardarPartidaAnagrama(aciertos : number, time: number, contadorDerrota: number)
  {
    let fecha = Date.now();
    let id = this.getCurrentUser()+ fecha + ".anagrama";
    
    this.db.collection("anagrama").doc(id).set({
      id:id,
      usuario: this.getCurrentUser(),
      fecha: fecha,
      tiempo : time,
      victorias : aciertos,
      Errores : contadorDerrota
    });
  }

  GuardarPartidaTBB(time:number)
  {
    let fecha = Date.now();
    let id = this.getCurrentUser()+ fecha + ".TBB";

    this.db.collection("TBB").doc(id).set({
      id:id,
      usuario: this.getCurrentUser(),
      fecha: fecha,
      tiempo : time
      
    });
  }
  
  datos;
  ObtenerDatos(datos)
  {
    console.log(datos);
  }

  getCurrentUser()
  {
    return this.authState.email;
  }
  
}
