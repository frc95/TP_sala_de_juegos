import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-anagrama',
  templateUrl: './anagrama.component.html',
  styleUrls: ['./anagrama.component.css']
})
export class AnagramaComponent implements OnInit {

  resultadoJugador : string="";

  palabras = [
    ["ROMA", "AMOR"],
    ["RIESGO", "SERGIO"],
    ["AGONISTA", "SANTIAGO"],
    ["CALOR", "CARLO"],
    ["PODER", "PEDRO"],
    ["SAUNAS", "SUSANA"],
    ["TRAMA", "MARTA"],
    ["AGRANDA", "GRANADA"]
  ];
  palabra : string="";
  index : number=0;
  palabraResultado : string="";
  activarBoton : boolean=true;
  aciertos : number = 0;
  mensaje : string = "Escriba el posible anagrama";
  contadorDerrota : number = 0;

  //Variable del temporizador
  time: number = 0;
  display = "0:0";
  interval;


  constructor(private sv : AuthService) { }

  ngOnInit(): void {
    
    this.palabra=this.palabras[this.index][1];
    this.palabraResultado=this.palabras[this.index][0];
    console.log(this.palabra);

    this.empezarTemporizador();

    document.getElementById('checkCortina').removeAttribute('checked');
  }

  Resolver()
  {
    let validar=this.esAnagrama(this.resultadoJugador,this.palabraResultado);
    if(validar)
    {
      this.aciertos++;
      console.log("Aciertos "+this.aciertos+" de 8");
      this.mensaje="Bien sigue asi!!!";
    }
    else
    {
      this.mensaje="Mal pero sigue intentando";
      this.ColocarX();
    }

    this.activarBoton=false;
    document.getElementById('checkCortina').setAttribute('checked','true');
    setTimeout(() =>{
      this.index++;

      let cortina = document.getElementById('checkCortina');
      if(cortina)
      {
        cortina.removeAttribute('checked');
      }
      //document.getElementById('checkCortina').removeAttribute('checked');

      if(this.index!=8)
      {
        this.palabra=this.palabras[this.index][1];
        this.palabraResultado=this.palabras[this.index][0];
      }
      setTimeout(() =>{

        if(this.contadorDerrota==3)
        {
          this.condicionDerrota();
        }
        else
        {
          this.activarBoton=true;
          this.terminarJuego();
          console.log(this.palabra);
        }
      }, 1000);
    }, 3000);

  }

  esAnagrama(palabra, posibleAnagrama){

    //Primero validamos si son iguales
    if(palabra.toLowerCase() === posibleAnagrama.toLowerCase()) 
    {
      return false;
    }

    // Cambiar a minúsculas ambas cadenas
    palabra = palabra.toLowerCase();
    posibleAnagrama = posibleAnagrama.toLowerCase();
    
    // Convertir ambas cadenas en un arreglo
    palabra = palabra.split("");
    posibleAnagrama = posibleAnagrama.split("");
    
    // Ordenar ese arreglo
    palabra = palabra.sort();
    posibleAnagrama = posibleAnagrama.sort();
    
    // Una vez ordenados, los convertimos a cadena nuevamente
    palabra = palabra.join("");
    posibleAnagrama = posibleAnagrama.join("");
    
    // Finalmente comparamos
    
    if(palabra === posibleAnagrama){
      return true;
    }else{
      return false;
    }
  }

  terminarJuego()
  {
    if(this.index==8)
    {
          this.pausar();
          this.activarBoton=false;
          this.mensaje="Aciertos "+this.aciertos+" de 8. Los resultados fueron guardados";
          this.sv.GuardarPartidaAnagrama(this.aciertos,this.time,this.contadorDerrota);
    }
    
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

  Reiniciar()
  {
    this.pausar();
    this.activarBoton=true;
    this.palabra=this.palabras[0][1];
    this.palabraResultado=this.palabras[0][0];
    this.index=0;
    this.time=0;
    this.display = "0:0";
    this.empezarTemporizador();
    this.mensaje="Escriba el posible anagrama";
    this.aciertos=0;
    this.contadorDerrota=0;

    document.images['img0'].src="../../../../assets/nada.png";
    document.images['img1'].src="../../../../assets/nada.png";
    document.images['img2'].src="../../../../assets/nada.png";
  }

  ColocarX()
  {
    this.contadorDerrota++;
    if(this.contadorDerrota==1)
    {
      document.images['img0'].src="../../../../assets/x.png";
    }
    if(this.contadorDerrota==2)
    {
      document.images['img1'].src="../../../../assets/x.png";
    }
    if(this.contadorDerrota==3)
    {
      document.images['img2'].src="../../../../assets/x.png";
      this.mensaje="0 intentos. Resultados guardados";
      
    }
  }

  condicionDerrota()
  {
    this.pausar();
    this.activarBoton=false;
    this.sv.GuardarPartidaAnagrama(this.aciertos,this.time,this.contadorDerrota);
  }

}
