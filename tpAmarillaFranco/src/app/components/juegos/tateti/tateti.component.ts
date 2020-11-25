import { Component, OnInit } from '@angular/core';
import { ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { AuthService } from '../../../services/auth.service'

@Component({
  selector: 'app-tateti',
  templateUrl: './tateti.component.html',
  styleUrls: ['./tateti.component.css']
})
export class TatetiComponent implements OnInit {

  constructor(private auth : AuthService) { }

  espacios:number=0;
  ganaste:boolean=false;
  derrota:boolean=false;
  espaciosVacios:number=0;

  ganadas : number=0;
  derrotas : number=0;
  empates : number=0;
  puntos : number=0;
  registro : string="Ganadas: "+String(this.ganadas)+"\n"+"Derrotas: "+String(this.derrotas)+"\n"+"Empates: "+String(this.empates)+"\n"+"Puntos: "+String(this.puntos)+"\n";

  mapa : any= [0, 0, 0, 0, 0, 0, 0, 0, 0];

  ngOnInit(): void {
  }

  insertarX0()
  {
    document.images['img0'].src="../../../../assets/x.png";
    document.getElementById('button0').setAttribute('disabled','true');
    this.mapa[0]=1;
    this.Maquina();
  }
  insertarX1()
  {
    document.images['img1'].src="../../../../assets/x.png";
    document.getElementById('button1').setAttribute('disabled','true');
    this.mapa[1]=1;
    this.Maquina();
  }
  insertarX2()
  {
    document.images['img2'].src="../../../../assets/x.png";
    document.getElementById('button2').setAttribute('disabled','true');
    this.mapa[2]=1;
    this.Maquina();
  }

  insertarX3()
  {
    document.images['img3'].src="../../../../assets/x.png";
    document.getElementById('button3').setAttribute('disabled','true');
    this.mapa[3]=1;
    this.Maquina();
  }
  insertarX4()
  {
    document.images['img4'].src="../../../../assets/x.png";
    document.getElementById('button4').setAttribute('disabled','true');
    this.mapa[4]=1;
    this.Maquina();
  }
  insertarX5()
  {
    document.images['img5'].src="../../../../assets/x.png";
    document.getElementById('button5').setAttribute('disabled','true');
    this.mapa[5]=1;
    this.Maquina();
  }

  insertarX6()
  {
    document.images['img6'].src="../../../../assets/x.png";
    document.getElementById('button6').setAttribute('disabled','true');
    this.mapa[6]=1;
    this.Maquina();
  }
  insertarX7()
  {
    document.images['img7'].src="../../../../assets/x.png";
    document.getElementById('button7').setAttribute('disabled','true');
    this.mapa[7]=1;
    this.Maquina();
  }
  insertarX8()
  {
    document.images['img8'].src="../../../../assets/x.png";
    document.getElementById('button8').setAttribute('disabled','true');
    this.mapa[8]=1;
    this.Maquina();
  }

  Maquina()
  {
    this.Victoria();

    if(this.ganaste==false)
    {
      if(this.espacios==0)
      {
        let numero=Math.floor(Math.random() * 9);
        while(this.mapa[numero]==1)
        {
          numero=Math.floor(Math.random() * 9);
        }
        document.images['img'+String(numero)].src="../../../../assets/circulo.png";
        document.getElementById('button'+String(numero)).setAttribute('disabled','true');
        this.mapa[numero]=2;
        this.espacios=1;
      }
  
      else if(this.espacios==1)
      {
        for(let i=0; i<9; i++){
          if(this.mapa[i]!=0)
          {
            this.espaciosVacios++;
          }
        }
        if(this.espaciosVacios==9)
        {
          console.log("Empate");
          this.empates++;
          this.puntos=this.puntos+1;
          this.RegistroDatos();
        }
        else
        {
          this.espaciosVacios=0;
          this.Eleccion();
        }
        
        
      }
      console.log(this.mapa);
      
    }
    this.Derrota();

  }

  Reiniciar()
  {
    document.images['img0'].src="../../../../assets/nada.png";
    document.images['img1'].src="../../../../assets/nada.png";
    document.images['img2'].src="../../../../assets/nada.png";
    document.images['img3'].src="../../../../assets/nada.png";
    document.images['img4'].src="../../../../assets/nada.png";
    document.images['img5'].src="../../../../assets/nada.png";
    document.images['img6'].src="../../../../assets/nada.png";
    document.images['img7'].src="../../../../assets/nada.png";
    document.images['img8'].src="../../../../assets/nada.png";

    document.getElementById('button0').removeAttribute('disabled');
    document.getElementById('button1').removeAttribute('disabled');
    document.getElementById('button2').removeAttribute('disabled');
    document.getElementById('button3').removeAttribute('disabled');
    document.getElementById('button4').removeAttribute('disabled');
    document.getElementById('button5').removeAttribute('disabled');
    document.getElementById('button6').removeAttribute('disabled');
    document.getElementById('button7').removeAttribute('disabled');
    document.getElementById('button8').removeAttribute('disabled');

    this.espacios=0;
    this.espaciosVacios=0;
    this.ganaste=false;
    this.derrota=false;
    for(let i=0; i<9; i++){
      this.mapa[i]=0;
    }

  }
  RegistroDatos()
  {
    this.registro="Ganadas: "+String(this.ganadas)+"\n"+"Derrotas: "+String(this.derrotas)+"\n"+"Empates: "+String(this.empates)+"\n"+"Puntos: "+String(this.puntos)+"\n";;
  }

  Victoria()
  {
    //Horizontal
    if(this.mapa[0]==1 && this.mapa[1]==1 && this.mapa[2]==1)
    {
      console.log("Ganaste");
      this.ganaste=true;
      for(let i=0; i<9; i++){
        if(this.mapa[i] == 0){
          document.getElementById('button'+String(i)).setAttribute('disabled','true');
        }     
      }
      this.ganadas++;
      this.puntos=this.puntos+3;

    }
    if(this.mapa[3]==1 && this.mapa[4]==1 && this.mapa[5]==1)
    {
      console.log("Ganaste");
      this.ganaste=true;
      for(let i=0; i<9; i++){
        if(this.mapa[i] == 0){
          document.getElementById('button'+String(i)).setAttribute('disabled','true');
        }     
      }
      this.ganadas++;
      this.puntos=this.puntos+3;
    }
    if(this.mapa[6]==1 && this.mapa[7]==1 && this.mapa[8]==1)
    {
      console.log("Ganaste");
      this.ganaste=true;
      for(let i=0; i<9; i++){
        if(this.mapa[i] == 0){
          document.getElementById('button'+String(i)).setAttribute('disabled','true');
        }     
      }
      this.ganadas++;
      this.puntos=this.puntos+3;
    }
    //Vertical
    if(this.mapa[0]==1 && this.mapa[3]==1 && this.mapa[6]==1)
    {
      console.log("Ganaste");
      this.ganaste=true;
      for(let i=0; i<9; i++){
        if(this.mapa[i] == 0){
          document.getElementById('button'+String(i)).setAttribute('disabled','true');
        }     
      }
      this.ganadas++;
      this.puntos=this.puntos+3;
    }
    if(this.mapa[1]==1 && this.mapa[4]==1 && this.mapa[7]==1)
    {
      console.log("Ganaste");
      this.ganaste=true;
      for(let i=0; i<9; i++){
        if(this.mapa[i] == 0){
          document.getElementById('button'+String(i)).setAttribute('disabled','true');
        }     
      }
      this.ganadas++;
      this.puntos=this.puntos+3;
    }
    if(this.mapa[2]==1 && this.mapa[5]==1 && this.mapa[8]==1)
    {
      console.log("Ganaste");
      this.ganaste=true;
      for(let i=0; i<9; i++){
        if(this.mapa[i] == 0){
          document.getElementById('button'+String(i)).setAttribute('disabled','true');
        }     
      }
      this.ganadas++;
      this.puntos=this.puntos+3;
    }
    //Diagonales
    if(this.mapa[0]==1 && this.mapa[4]==1 && this.mapa[8]==1)
    {
      console.log("Ganaste");
      this.ganaste=true;
      for(let i=0; i<9; i++){
        if(this.mapa[i] == 0){
          document.getElementById('button'+String(i)).setAttribute('disabled','true');
        }     
      }
      this.ganadas++;
      this.puntos=this.puntos+3;
    }
    if(this.mapa[6]==1 && this.mapa[4]==1 && this.mapa[2]==1)
    {
      console.log("Ganaste");
      this.ganaste=true;
      for(let i=0; i<9; i++){
        if(this.mapa[i] == 0){
          document.getElementById('button'+String(i)).setAttribute('disabled','true');
        }     
      }
      this.ganadas++;
      this.puntos=this.puntos+3;
    }
    this.RegistroDatos();
  }
  Derrota(){
    //Horizontal
    if(this.mapa[0]==2 && this.mapa[1]==2 && this.mapa[2]==2)
    {
      console.log("Perdiste");
      this.derrota=true;
      for(let i=0; i<9; i++){
        if(this.mapa[i] == 0){
          document.getElementById('button'+String(i)).setAttribute('disabled','true');
        }     
      }
      this.derrotas++;

    }
    if(this.mapa[3]==2 && this.mapa[4]==2 && this.mapa[5]==2)
    {
      console.log("Perdiste");
      this.derrota=true;
      for(let i=0; i<9; i++){
        if(this.mapa[i] == 0){
          document.getElementById('button'+String(i)).setAttribute('disabled','true');
        }     
      }
      this.derrotas++;
    }
    if(this.mapa[6]==2 && this.mapa[7]==2 && this.mapa[8]==2)
    {
      console.log("Perdiste");
      this.derrota=true;
      for(let i=0; i<9; i++){
        if(this.mapa[i] == 0){
          document.getElementById('button'+String(i)).setAttribute('disabled','true');
        }     
      }
      this.derrotas++;
    }
    //Vertical
    if(this.mapa[0]==2 && this.mapa[3]==2 && this.mapa[6]==2)
    {
      console.log("Perdiste");
      this.derrota=true;
      for(let i=0; i<9; i++){
        if(this.mapa[i] == 0){
          document.getElementById('button'+String(i)).setAttribute('disabled','true');
        }     
      }
      this.derrotas++;
    }
    if(this.mapa[1]==2 && this.mapa[4]==2 && this.mapa[7]==2)
    {
      console.log("Perdiste");
      this.derrota=true;
      for(let i=0; i<9; i++){
        if(this.mapa[i] == 0){
          document.getElementById('button'+String(i)).setAttribute('disabled','true');
        }     
      }
      this.derrotas++;
    }
    if(this.mapa[2]==2 && this.mapa[5]==2 && this.mapa[8]==2)
    {
      console.log("Perdiste");
      this.derrota=true;
      for(let i=0; i<9; i++){
        if(this.mapa[i] == 0){
          document.getElementById('button'+String(i)).setAttribute('disabled','true');
        }     
      }
      this.derrotas++;
    }
    //Diagonales
    if(this.mapa[0]==2 && this.mapa[4]==2 && this.mapa[8]==2)
    {
      console.log("Perdiste");
      this.derrota=true;
      for(let i=0; i<9; i++){
        if(this.mapa[i] == 0){
          document.getElementById('button'+String(i)).setAttribute('disabled','true');
        }     
      }
      this.derrotas++;
    }
    if(this.mapa[6]==2 && this.mapa[4]==2 && this.mapa[2]==2)
    {
      console.log("Perdiste");
      this.derrota=true;
      for(let i=0; i<9; i++){
        if(this.mapa[i] == 0){
          document.getElementById('button'+String(i)).setAttribute('disabled','true');
        }     
      }
      this.derrotas++;
    }
    this.RegistroDatos();
  }

  Eleccion()
  {
    let huboCambio : boolean=false;
    //Arriba
    if( ((this.mapa[0] == 1 && this.mapa[1]==1) || (this.mapa[0] == 2 && this.mapa[1]==2)) && this.mapa[2] == 0)
    {
      document.images['img'+String(2)].src="../../../../assets/circulo.png";
      document.getElementById('button'+String(2)).setAttribute('disabled','true');
      this.mapa[2]=2;
      huboCambio=true;
    }
    else if(((this.mapa[0] == 1 && this.mapa[2]==1) || (this.mapa[0] == 2 && this.mapa[2]==2)) && this.mapa[1] == 0)
    {
      document.images['img'+String(1)].src="../../../../assets/circulo.png";
      document.getElementById('button'+String(1)).setAttribute('disabled','true');
      this.mapa[1]=2;
      huboCambio=true;
    }
    else if(((this.mapa[1] == 1 && this.mapa[2]==1) || (this.mapa[1] == 2 && this.mapa[2]==2)) && this.mapa[0] == 0)
    {
      document.images['img'+String(0)].src="../../../../assets/circulo.png";
      document.getElementById('button'+String(0)).setAttribute('disabled','true');
      this.mapa[0]=2;
      huboCambio=true;
    }
    //Medio
    else if(((this.mapa[3] == 1 && this.mapa[4]==1) || (this.mapa[3] == 2 && this.mapa[4]==2)) && this.mapa[5] == 0)
    {
      document.images['img'+String(5)].src="../../../../assets/circulo.png";
      document.getElementById('button'+String(5)).setAttribute('disabled','true');
      this.mapa[5]=2;
      huboCambio=true;
    }
    else if(((this.mapa[3] == 1 && this.mapa[5]==1) || (this.mapa[3] == 2 && this.mapa[5]==2)) && this.mapa[4] == 0)
    {
      document.images['img'+String(4)].src="../../../../assets/circulo.png";
      document.getElementById('button'+String(4)).setAttribute('disabled','true');
      this.mapa[4]=2;
      huboCambio=true;
    }
    else if(((this.mapa[5] == 1 && this.mapa[4]==1) || (this.mapa[5] == 2 && this.mapa[4]==2)) && this.mapa[3] == 0)
    {
      document.images['img'+String(3)].src="../../../../assets/circulo.png";
      document.getElementById('button'+String(3)).setAttribute('disabled','true');
      this.mapa[3]=2;
      huboCambio=true;
    }
    //Abajo
    else if(((this.mapa[6] == 1 && this.mapa[7]==1) || (this.mapa[6] == 2 && this.mapa[7]==2)) && this.mapa[8] == 0)
    {
      document.images['img'+String(8)].src="../../../../assets/circulo.png";
      document.getElementById('button'+String(8)).setAttribute('disabled','true');
      this.mapa[8]=2;
      huboCambio=true;
    }
    else if(((this.mapa[6] == 1 && this.mapa[8]==1) || (this.mapa[6] == 2 && this.mapa[8]==2)) && this.mapa[7] == 0)
    {
      document.images['img'+String(7)].src="../../../../assets/circulo.png";
      document.getElementById('button'+String(7)).setAttribute('disabled','true');
      this.mapa[7]=2;
      huboCambio=true;
    }
    else if(((this.mapa[8] == 1 && this.mapa[7]==1) || (this.mapa[8] == 2 && this.mapa[7]==2)) && this.mapa[6] == 0)
    {
      document.images['img'+String(6)].src="../../../../assets/circulo.png";
      document.getElementById('button'+String(6)).setAttribute('disabled','true');
      this.mapa[6]=2;
      huboCambio=true;
    }
  
    //Izquierda
    else if(((this.mapa[0] == 1 && this.mapa[3]==1) || (this.mapa[0] == 2 && this.mapa[3]==2)) && this.mapa[6] == 0)
    {
      document.images['img'+String(6)].src="../../../../assets/circulo.png";
      document.getElementById('button'+String(6)).setAttribute('disabled','true');
      this.mapa[6]=2;
      huboCambio=true;
    }
    else if(((this.mapa[6] == 1 && this.mapa[0]==1) || (this.mapa[6] == 2 && this.mapa[0]==2)) && this.mapa[3] == 0)
    {
      document.images['img'+String(3)].src="../../../../assets/circulo.png";
      document.getElementById('button'+String(3)).setAttribute('disabled','true');
      this.mapa[3]=2;
      huboCambio=true;
    }
    else if(((this.mapa[6] == 1 && this.mapa[3]==1) || (this.mapa[6] == 2 && this.mapa[3]==2)) && this.mapa[0] == 0)
    {
      document.images['img'+String(0)].src="../../../../assets/circulo.png";
      document.getElementById('button'+String(0)).setAttribute('disabled','true');
      this.mapa[0]=2;
      huboCambio=true;
    }
    //Medio
    else if(((this.mapa[4] == 1 && this.mapa[1]==1) || (this.mapa[4] == 2 && this.mapa[1]==2)) && this.mapa[7] == 0)
    {
      document.images['img'+String(7)].src="../../../../assets/circulo.png";
      document.getElementById('button'+String(7)).setAttribute('disabled','true');
      this.mapa[7]=2;
      huboCambio=true;
    }
    else if(((this.mapa[1] == 1 && this.mapa[7]==1) || (this.mapa[1] == 2 && this.mapa[7]==2)) && this.mapa[4] == 0)
    {
      document.images['img'+String(4)].src="../../../../assets/circulo.png";
      document.getElementById('button'+String(4)).setAttribute('disabled','true');
      this.mapa[4]=2;
      huboCambio=true;
    }
    else if(((this.mapa[4] == 1 && this.mapa[7]==1) || (this.mapa[4] == 2 && this.mapa[7]==2)) && this.mapa[1] == 0)
    {
      document.images['img'+String(1)].src="../../../../assets/circulo.png";
      document.getElementById('button'+String(1)).setAttribute('disabled','true');
      this.mapa[1]=2;
      huboCambio=true;
    }
    //Derecha
    else if(((this.mapa[2] == 1 && this.mapa[5]==1) || (this.mapa[2] == 2 && this.mapa[5]==2)) && this.mapa[8] == 0)
    {
      document.images['img'+String(8)].src="../../../../assets/circulo.png";
      document.getElementById('button'+String(8)).setAttribute('disabled','true');
      this.mapa[8]=2;
      huboCambio=true;
    }
    else if(((this.mapa[2] == 1 && this.mapa[8]==1) || (this.mapa[2] == 2 && this.mapa[8]==2)) && this.mapa[5] == 0)
    {
      document.images['img'+String(5)].src="../../../../assets/circulo.png";
      document.getElementById('button'+String(5)).setAttribute('disabled','true');
      this.mapa[5]=2;
      huboCambio=true;
    }
    else if(((this.mapa[5] == 1 && this.mapa[8]==1) || (this.mapa[5] == 2 && this.mapa[8]==2)) && this.mapa[2] == 0)
    {
      document.images['img'+String(2)].src="../../../../assets/circulo.png";
      document.getElementById('button'+String(2)).setAttribute('disabled','true');
      this.mapa[2]=2;
      huboCambio=true;
    }
  
    //Diagonal 1 \
    else if(((this.mapa[0] == 1 && this.mapa[4]==1) || (this.mapa[0] == 2 && this.mapa[4]==2)) && this.mapa[8] == 0)
    {
      document.images['img'+String(8)].src="../../../../assets/circulo.png";
      document.getElementById('button'+String(8)).setAttribute('disabled','true');
      this.mapa[8]=2;
      huboCambio=true;
    }
    else if(((this.mapa[0] == 1 && this.mapa[8]==1) || (this.mapa[0] == 2 && this.mapa[8]==2)) && this.mapa[4] == 0)
    {
      document.images['img'+String(4)].src="../../../../assets/circulo.png";
      document.getElementById('button'+String(4)).setAttribute('disabled','true');
      this.mapa[4]=2;
      huboCambio=true;
    }
    else if(((this.mapa[4] == 1 && this.mapa[8]==1) || (this.mapa[4] == 2 && this.mapa[8]==2)) && this.mapa[0] == 0)
    {
      document.images['img'+String(0)].src="../../../../assets/circulo.png";
      document.getElementById('button'+String(0)).setAttribute('disabled','true');
      this.mapa[0]=2;
      huboCambio=true;
    }

    //Diagonal 2 /
    else if(((this.mapa[4] == 1 && this.mapa[2]==1) || (this.mapa[4] == 2 && this.mapa[2]==2)) && this.mapa[6] == 0)
    {
      document.images['img'+String(6)].src="../../../../assets/circulo.png";
      document.getElementById('button'+String(6)).setAttribute('disabled','true');
      this.mapa[6]=2;
      huboCambio=true;
    }
    else if(((this.mapa[2] == 1 && this.mapa[6]==1) || (this.mapa[2] == 2 && this.mapa[6]==2)) && this.mapa[4] == 0)
    {
      document.images['img'+String(4)].src="../../../../assets/circulo.png";
      document.getElementById('button'+String(4)).setAttribute('disabled','true');
      this.mapa[4]=2;
      huboCambio=true;
    }
    else if(((this.mapa[4] == 1 && this.mapa[6]==1) || (this.mapa[4] == 2 && this.mapa[6]==2)) && this.mapa[2] == 0)
    {
      document.images['img'+String(2)].src="../../../../assets/circulo.png";
      document.getElementById('button'+String(2)).setAttribute('disabled','true');
      this.mapa[2]=2;
      huboCambio=true;
    }
    if(huboCambio==false)
    {
      let numero=Math.floor(Math.random() * 9);
      while(this.mapa[numero]!=0)
      {
        numero=Math.floor(Math.random() * 9);
      }
      document.images['img'+String(numero)].src="../../../../assets/circulo.png";
      document.getElementById('button'+String(numero)).setAttribute('disabled','true');
      this.mapa[numero]=2;
    }
  }

  GuardarResultado()
  {
    this.auth.GuardarPartidaTateti(this.ganadas,this.derrotas,this.empates);
    this.ganadas=0;
    this.empates=0;
    this.derrotas=0;
    this.puntos=0;
    this.RegistroDatos();
  }


}


