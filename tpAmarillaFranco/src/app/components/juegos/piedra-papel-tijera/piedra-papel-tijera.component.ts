import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-piedra-papel-tijera',
  templateUrl: './piedra-papel-tijera.component.html',
  styleUrls: ['./piedra-papel-tijera.component.css']
})
export class PiedraPapelTijeraComponent implements OnInit {

  opcion : number;

  ganadas : number=0;
  perdidas : number=0;
  empates : number=0;
  registro : string="Ganadas: "+String(this.ganadas)+"\n"+"Perdidas: "+String(this.perdidas)+"\n"+"Empates: "+String(this.empates)+"\n";

  constructor() { }

  ngOnInit(): void {
  }

  opcionPiedra(){
 
      this.opcion=0;

      document.getElementById('piedra').classList.add('controlJugador');
      document.getElementById('papel').setAttribute('disabled','true');
      document.getElementById('tijera').setAttribute('disabled','true');
      document.getElementById('piedra').setAttribute('disabled','true');
      setTimeout(function(){ 
        document.getElementById('piedra').classList.remove('controlJugador');
        document.getElementById('papel').removeAttribute('disabled');
        document.getElementById('tijera').removeAttribute('disabled');
        document.getElementById('piedra').removeAttribute('disabled');
      }, 4000);
    
      this.Maquina();
  }

  opcionPapel()
  {
    this.opcion=1;

    document.getElementById('papel').classList.add('controlJugador');
    document.getElementById('piedra').setAttribute('disabled','true');
    document.getElementById('tijera').setAttribute('disabled','true');
    document.getElementById('papel').setAttribute('disabled','true');
    setTimeout(function(){ 
      document.getElementById('papel').classList.remove('controlJugador');
      document.getElementById('piedra').removeAttribute('disabled');
      document.getElementById('tijera').removeAttribute('disabled');
      document.getElementById('papel').removeAttribute('disabled');
    }, 4000);

    this.Maquina();
  }
  opcionTijera()
  {
    this.opcion=2;

    document.getElementById('tijera').classList.add('controlJugador');
    document.getElementById('piedra').setAttribute('disabled','true');
    document.getElementById('papel').setAttribute('disabled','true');
    document.getElementById('tijera').setAttribute('disabled','true');
    setTimeout(function(){ 
      document.getElementById('tijera').classList.remove('controlJugador');
      document.getElementById('piedra').removeAttribute('disabled');
      document.getElementById('papel').removeAttribute('disabled');
      document.getElementById('tijera').removeAttribute('disabled');
    }, 4000);

    this.Maquina();
  }

  //0=piedra
  //1=papel
  //2=tijera
  Maquina()
  {
    let numero=Math.floor(Math.random() * 3);
    if(numero==0)
    {
      document.getElementById('piedraBot').classList.add('controlMaquina');
      setTimeout(function(){ 
          document.getElementById('piedraBot').classList.remove('controlMaquina');
      }, 4000);

      if(this.opcion==0)
      {
        console.log("Empate"); 
        this.empates++;
        this.RegistroDatos();
      }
      else if(this.opcion==1)
      {
        console.log("Ganaste");
        this.ganadas++;
        this.RegistroDatos();
      }
      else if(this.opcion==2)
      {
        console.log("Perdiste");
        this.perdidas++;
        this.RegistroDatos();
      }
    }
    else if(numero==1)
    {
      document.getElementById('papelBot').classList.add('controlMaquina');
      setTimeout(function(){ 
          document.getElementById('papelBot').classList.remove('controlMaquina');
      }, 4000);
      if(this.opcion==0)
      {
        console.log("Perdiste");
        this.perdidas++;
        this.RegistroDatos();
      }
      else if(this.opcion==1)
      {
        console.log("Empate");
        this.empates++;
        this.RegistroDatos();
      }
      else if(this.opcion==2)
      {
        console.log("Ganaste");
        this.ganadas++;
        this.RegistroDatos();
      }
    }
    else if(numero==2)
    {
      document.getElementById('tijeraBot').classList.add('controlMaquina');
      setTimeout(function(){ 
          document.getElementById('tijeraBot').classList.remove('controlMaquina');
      }, 4000);
      if(this.opcion==0)
      {
        console.log("Ganaste");
        this.ganadas++;
        this.RegistroDatos();
      }
      else if(this.opcion==1)
      {
        console.log("Perdiste");
        this.perdidas++;
        this.RegistroDatos();
      }
      else if(this.opcion==2)
      {
        console.log("Empate");
        this.empates++;
        this.RegistroDatos();
      }
    }

    console.log(numero); 
  }

  RegistroDatos()
  {
    this.registro="Ganadas: "+String(this.ganadas)+"\n"+"Perdidas: "+String(this.perdidas)+"\n"+"Empates: "+String(this.empates)+"\n";
  }
}
