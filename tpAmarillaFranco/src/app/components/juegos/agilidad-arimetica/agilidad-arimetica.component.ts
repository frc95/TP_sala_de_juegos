import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agilidad-arimetica',
  templateUrl: './agilidad-arimetica.component.html',
  styleUrls: ['./agilidad-arimetica.component.css']
})
export class AgilidadArimeticaComponent implements OnInit {

  resultado : number = 0;
  resultadoJugador : number = 0;
  cuenta : string = "";
  contador : number = 10;

  numeroUno : number = 0;
  numeroDos : number = 0;
  operador : number = 0;
  operadorString : string = "";

  mensaje : string = "Ingrese un resultado";

  victorias : number=0;
  derrotas : number=0;
  registro : string = "Victorias: "+this.victorias+"\n"+"Derrotas: "+this.derrotas+"\n";

  constructor() {
    this.GenerarCuenta();


  }

  ngOnInit(): void {
  }

  Resolver()
  {
    if(this.resultado==this.resultadoJugador)
    {
      this.victorias++;
      this.mensaje="Bien hecho";
      this.RegistroDatos();
      this.GenerarCuenta();
    }
    else
    {
      this.derrotas++;
      this.mensaje="Sigue intentando";
      this.RegistroDatos();
      this.GenerarCuenta();
    }
    
  }

  RegistroDatos()
  {
    this.registro="Victorias: "+this.victorias+"\n"+"Derrotas: "+this.derrotas+"\n";
  }

  GenerarCuenta()
  {
    /*while(this.contador>0)
    {
      this.contador--;
      Thread.s
    }*/

    this.numeroUno=Math.floor(Math.random() * 21);
    this.numeroDos=Math.floor(Math.random() * 21);
    this.operador=Math.floor(Math.random() * 4);

    if(this.operador==0)
    {
      this.operadorString="+";
      this.resultado=this.numeroUno+this.numeroDos;
    }
    else if(this.operador==1)
    {
      this.operadorString="-";
      this.resultado=this.numeroUno-this.numeroDos;
    }
    else if(this.operador==2)
    {
      this.operadorString="*";
      this.resultado=this.numeroUno*this.numeroDos;
    }
    else if(this.operador==3)
    {
      this.operadorString="/";
      this.resultado=this.numeroUno/this.numeroDos;
    }

    this.cuenta=String(this.numeroUno)+this.operadorString+String(this.numeroDos)+"=";

    console.log("Resultado: "+this.resultado);
  }
}
