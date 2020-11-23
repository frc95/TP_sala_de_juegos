import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Juego {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  mostrarPPT: boolean = false;
  mostrarTateti: boolean = false;

  mostrarAdivina: boolean = false;
  mostrarAgilidad: boolean = false;

  mostrarAnagrama: boolean = false;
  mostrarMemotest: boolean = false;

  mostrarTBB : boolean = false;

  juegos: Juego[] = [
    {value: '0', viewValue: 'Adivina numero'},
    {value: '1', viewValue: 'Agilidad arimetica'},
    {value: '2', viewValue: 'Anagrama'},
    {value: '3', viewValue: 'Memotest'},
    {value: '4', viewValue: 'Piedra Papel Tijera'},
    {value: '5', viewValue: 'TaTeTi'},
    {value: '6', viewValue: 'The blue ball'},

  ];

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  toggleChild(value){
      console.log(value);
      if(value=="0")
      {
        this.mostrarAdivina= true;
        this.mostrarPPT = false;
        this.mostrarTateti = false;
        this.mostrarAgilidad = false;
        this.mostrarMemotest = false;
        this.mostrarAnagrama = false;
        this.mostrarTBB = false;
      
      }
      else if(value=="1")
      {
        this.mostrarAdivina= false;
        this.mostrarPPT = false;
        this.mostrarTateti = false;
        this.mostrarAgilidad = true;
        this.mostrarMemotest = false;
        this.mostrarAnagrama = false;
        this.mostrarTBB = false;
      }
      else if(value=="2")
      {
        this.mostrarAdivina= false;
        this.mostrarPPT = false;
        this.mostrarTateti = false;
        this.mostrarAgilidad = false;
        this.mostrarMemotest = false;
        this.mostrarAnagrama = true;
        this.mostrarTBB = false;
      }
      else if(value=="3")
      {
        this.mostrarAdivina= false;
        this.mostrarPPT = false;
        this.mostrarTateti = false;
        this.mostrarAgilidad = false;
        this.mostrarMemotest = true;
        this.mostrarAnagrama = false;
        this.mostrarTBB = false;
      }
      else if(value=="4")
      {
        this.mostrarAdivina= false;
        this.mostrarPPT = true;
        this.mostrarTateti = false;
        this.mostrarAgilidad = false;
        this.mostrarMemotest = false;
        this.mostrarAnagrama = false;
        this.mostrarTBB = false;
      }
      else if(value=="5")
      {
        this.mostrarAdivina= false;
        this.mostrarPPT = false;
        this.mostrarTateti = true;
        this.mostrarAgilidad = false;
        this.mostrarMemotest = false;
        this.mostrarAnagrama = false;
        this.mostrarTBB = false;
      }
      else if(value=="6")
      {
        this.mostrarAdivina= false;
        this.mostrarPPT = false;
        this.mostrarTateti = false;
        this.mostrarAgilidad = false;
        this.mostrarMemotest = false;
        this.mostrarAnagrama = false;
        this.mostrarTBB = true;
      }
  }



}
