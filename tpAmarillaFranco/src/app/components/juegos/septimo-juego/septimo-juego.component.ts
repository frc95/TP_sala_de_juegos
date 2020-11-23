import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-septimo-juego',
  templateUrl: './septimo-juego.component.html',
  styleUrls: ['./septimo-juego.component.css']
})
export class SeptimoJuegoComponent implements OnInit {

  puntos = 0;
  time = 60;
  display = "0:0";
  interval;
  mensaje = "Pasa el mouse sobre la pelota azul. Cuidado con el enemigo";

  puntosParaGanar = 30;

  funcion : any;
  funcionEnemigo : any;

  constructor(private sv: AuthService) {
  }

  ngOnInit(): void {

    this.funcion=this.sumarPuntos.bind(this);
    this.funcionEnemigo=this.derrotaDelEnemigo.bind(this);
    document.querySelector("#jugador").addEventListener("mouseover", this.funcion, true);
    document.querySelector("#enemigo").addEventListener("mouseover", this.funcionEnemigo, true);

    this.empezarTemporizador();
  }

  sumarPuntos (event){
    this.puntos++;

    let numeroAleatorio1 = Math.round(Math.random()*390); //top
    let numeroAleatorio2 = Math.round(Math.random()*480); //left
    document.getElementById("jugador").style.marginTop = numeroAleatorio1 + "px";
    document.getElementById("jugador").style.marginLeft = numeroAleatorio2 + "px";

    if(this.puntos==this.puntosParaGanar)
    {
      this.mensaje="Ganaste!.Los resultados fueron guardados";
      this.pausar();
      this.sv.GuardarPartidaTBB(this.time);
      document.querySelector("#jugador").removeEventListener("mouseover", this.funcion, true);
      document.querySelector("#enemigo").removeEventListener("mouseover", this.funcionEnemigo, true);

      document.getElementById("enemigo").style.animationPlayState = "paused";
    }

  }

  empezarTemporizador(){
    this.interval = setInterval(() => {
      if(this.time === 60){
        this.time--;
      }
      else{
        this.time--;
      }
      this.condicionDerrota();
      this.display = this.transform(this.time);
    }, 1000);
  }

  transform(value: number):string{
    const minutes : number = Math.floor(value/60);
    return minutes + ':' + (value - minutes * 60);
  }

  pausar(){
    clearInterval(this.interval);
  }

  condicionDerrota()
  {
    if(this.time==0)
    {
      this.pausar();
      this.mensaje="Perdiste se acabo el tiempo!!";

      let jugador = document.querySelector("#jugador");
      let enemigo = document.querySelector("#enemigo");
      if(jugador)
      {
        jugador.removeEventListener("mouseover", this.funcion, true);
      }
      if(enemigo)
      {
        enemigo.removeEventListener("mouseover", this.funcionEnemigo, true);
      }
      //document.querySelector("#jugador").removeEventListener("mouseover", this.funcion, true);
      //document.querySelector("#enemigo").removeEventListener("mouseover", this.funcionEnemigo, true);
      
      let animacion = document.getElementById("enemigo");
      if(animacion)
      {
        animacion.style.animationPlayState = "paused";
      }
      //document.getElementById("enemigo").style.animationPlayState = "paused";
    }
  }

  derrotaDelEnemigo()
  {
    this.pausar();
    this.mensaje="Perdiste pasaste el mouse sobre el enemigo";
    document.querySelector("#jugador").removeEventListener("mouseover", this.funcion, true);
    document.querySelector("#enemigo").removeEventListener("mouseover", this.funcionEnemigo, true);

    document.getElementById("enemigo").style.animationPlayState = "paused";
    
  }

  reiniciar(){

    document.getElementById("enemigo").style.animationPlayState = "running";

    document.querySelector("#jugador").removeEventListener("mouseover", this.funcion, true);
    document.querySelector("#enemigo").removeEventListener("mouseover", this.funcionEnemigo, true);
    this.pausar();
    this.puntos = 0;
    this.time = 60;
    this.mensaje = "Pasa el mouse sobre la pelota azul. Cuidado con el enemigo";

    this.funcion=this.sumarPuntos.bind(this);
    document.querySelector("#jugador").addEventListener("mouseover", this.funcion, true);
    document.querySelector("#enemigo").addEventListener("mouseover", this.funcionEnemigo, true);
    this.empezarTemporizador();
  }



}
