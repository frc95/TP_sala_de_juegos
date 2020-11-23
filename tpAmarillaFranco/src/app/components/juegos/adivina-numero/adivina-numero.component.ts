import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

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

  activar : boolean = true;

  constructor(private sv : AuthService) {
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
        this.ColocarX();
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

  ColocarX()
  {
    this.resultado="Segui participando";
    if(this.derrotas==1)
    {
      document.images['img0'].src="../../../../assets/x.png";
    }
    if(this.derrotas==2)
    {
      document.images['img1'].src="../../../../assets/x.png";
    }
    if(this.derrotas==3)
    {
      document.images['img2'].src="../../../../assets/x.png";
      this.activar=false;
      this.resultado="Resultados Guardados. Pulse Reiniciar para seguir jugando";
      this.sv.GuardarPartidaAdivinaNumero(this.victorias);
    }
  }

  Reiniciar()
  {
    this.activar=true;
    document.images['img0'].src="../../../../assets/nada.png";
    document.images['img1'].src="../../../../assets/nada.png";
    document.images['img2'].src="../../../../assets/nada.png";
    this.derrotas=0;
    this.victorias=0;
    this.RegistroDatos();
  }

}
