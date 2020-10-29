import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adivina-numero',
  templateUrl: './adivina-numero.component.html',
  styleUrls: ['./adivina-numero.component.css']
})
export class AdivinaNumeroComponent implements OnInit {

  numeroOculto : Number=0;
  numeroElegido : Number;

  victorias : number=0;
  derrotas : number=0;

  registro : string = "Victorias: "+this.victorias+"\n"+"Derrotas: "+this.derrotas+"\n";

  resultado : string = "Bienvenido";

  constructor() {
    this.numeroOculto=Math.floor(Math.random() * 11);
    console.log("Numero oculto: "+this.numeroOculto);
  }

  ngOnInit(): void {
    
  }

  Adivinar()
  {
    document.getElementById('cortina').classList.add('animacionCortina');

    setTimeout(() => {
      if(this.numeroOculto==this.numeroElegido)
      {
        this.victorias++;
        this.resultado="Felicidades!!!";
        this.numeroOculto=Math.floor(Math.random() * 11);
        this.RegistroDatos();
        console.log("Numero oculto: "+this.numeroOculto);
        document.getElementById('cortina').classList.remove('animacionCortina');
      }
      else
      {
        this.derrotas++;
        this.resultado="Segui participando";
        this.numeroOculto=Math.floor(Math.random() * 11);
        this.RegistroDatos();
        console.log("Numero oculto: "+this.numeroOculto);
        document.getElementById('cortina').classList.remove('animacionCortina');
      }
    }, 4000);
    
  }

  RegistroDatos()
  {
    this.registro="Victorias: "+this.victorias+"\n"+"Derrotas: "+this.derrotas+"\n";
  }

}
