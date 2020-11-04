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

  //variables para el temporizador
  time: number = 0;
  display = "0:0";
  interval;

  //empezar
  activar : boolean = false;

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
      this.pausar();
      this.activar=false;
      this.mensaje="Si desea comenzar de nuevo pulse el boton Reiniciar";
      this.derrotas=0;
      this.time=0;
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

  empezar()
  {
    this.activar=true;
    this.empezarTemporizador();
  }
  reiniciar()
  {
    this.display = "0:0";
    document.images['img0'].src="../../../../assets/nada.png";
    document.images['img1'].src="../../../../assets/nada.png";
    document.images['img2'].src="../../../../assets/nada.png";
  }
}
