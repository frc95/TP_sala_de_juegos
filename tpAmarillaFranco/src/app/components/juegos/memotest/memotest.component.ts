import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-memotest',
  templateUrl: './memotest.component.html',
  styleUrls: ['./memotest.component.css']
})
export class MemotestComponent implements OnInit {


  cartas = [{id:0, src: "../../../../assets/poke/poke01.png", validarFrente:false, desactivar:true},
            {id:1, src: "../../../../assets/poke/poke02.png", validarFrente:false, desactivar:true},
            {id:2, src: "../../../../assets/poke/poke03.png", validarFrente:false, desactivar:true},
            {id:3, src: "../../../../assets/poke/poke04.png", validarFrente:false, desactivar:true},
            {id:4, src: "../../../../assets/poke/poke05.png", validarFrente:false, desactivar:true},
            {id:5, src: "../../../../assets/poke/poke06.png", validarFrente:false, desactivar:true},
            {id:6, src: "../../../../assets/poke/poke01.png", validarFrente:false, desactivar:true},
            {id:7, src: "../../../../assets/poke/poke02.png", validarFrente:false, desactivar:true},
            {id:8, src: "../../../../assets/poke/poke03.png", validarFrente:false, desactivar:true},
            {id:9, src: "../../../../assets/poke/poke04.png", validarFrente:false, desactivar:true},
            {id:10, src: "../../../../assets/poke/poke05.png", validarFrente:false, desactivar:true},
            {id:11, src: "../../../../assets/poke/poke06.png", validarFrente:false, desactivar:true},];
  bocaAbajo : string = "../../../../assets/poke/poke.png";

  contador = 0;
  contadorFinal=0;
  primeraCarta;

  display="0:0";
  interval;
  time : number = 0;

  mensaje : string="Elija 2 cartas";

  constructor(private sv:AuthService) { 
    this.cartas=this.shuffle();
    console.log(this.cartas);
    this.empezarTemporizador();
  }

  ngOnInit(): void {
  }

  Seleccionar(posicion : number)
  {
    this.cartas[posicion].validarFrente = true;
    this.cartas[posicion].desactivar = false;
    this.contador++;
    if(this.contador==1)
    {
      this.primeraCarta=this.cartas[posicion];
    }
    if(this.contador==2)
    {
      //this.cartas[posicion].desactivar = false;
      for(let i=0;i<12;i++)
      {
        this.cartas[i].desactivar=false;
      }

      this.contador=0;

      if(this.primeraCarta.src!=this.cartas[posicion].src)
      {
        this.mensaje="Espere 3 segundos";
        setTimeout(() => {
          
          this.mensaje="Elija 2 cartas";
          this.cartas[posicion].validarFrente = false;
          this.cartas[posicion].desactivar = true;

          for(let i=0;i<12;i++)
          {
            if(this.primeraCarta.id==this.cartas[i].id)
            {
              this.cartas[i].validarFrente=false;
              this.cartas[i].desactivar = true;
              break;
            }
          }

          for(let i=0;i<12;i++)
          {
            if(this.cartas[i].validarFrente==false)
            {
              this.cartas[i].desactivar=true;
            }
          }

        }, 3000);
      }
      else
      {
        this.contadorFinal++;
        for(let i=0;i<12;i++)
        {
          if(this.cartas[i].validarFrente==false)
          {
            this.cartas[i].desactivar=true;
          }
        }
      }
      
      this.JuegoTerminado();
      
    }
    
  }

  shuffle(){
    let currentIndex = this.cartas.length;
    let temporaryValue;
    let randomIndex;

    while (currentIndex !== 0){
      randomIndex = Math.floor(Math.random()*currentIndex);
      currentIndex -= 1;

      temporaryValue = this.cartas[currentIndex];
      this.cartas[currentIndex] = this.cartas[randomIndex];
      this.cartas[randomIndex] = temporaryValue;
    }
    
    return this.cartas;
  }

  Reinicio()
  {
    this.pausar();
    this.contadorFinal=0;
    this.mensaje="Elija 2 cartas";
    for(let i=0;i<12;i++)
    {
      this.cartas[i].validarFrente=false;
      this.cartas[i].desactivar=true;
    }
    this.cartas=this.shuffle();
    this.display = "0:0";
    this.time=0;
    this.empezarTemporizador();
    console.log(this.cartas);
  }

  empezarTemporizador(){
    this.interval = setInterval(() => {
      if(this.time === 0){
        this.time++;
      }
      else{
        this.time++;
      }
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

  JuegoTerminado()
  {
    if(this.contadorFinal==6)
    {
      this.pausar();
      this.contadorFinal=0;
      this.mensaje="Juego terminado, el tiempo fue guardado. Reinicie el juego para continuar";
      this.sv.GuardarPartidaMemotest(this.time);
    }
  }



}
