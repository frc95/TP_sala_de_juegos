import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-ruta-facil',
  templateUrl: './ruta-facil.component.html',
  styleUrls: ['./ruta-facil.component.css']
})
export class RutaFacilComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Piedra Papel Tijera', cols: 1, rows: 1, foto:'../../../assets/piedraPapelTijeras.png' },
          { title: 'TaTeTi', cols: 1, rows: 1, foto:'../../../assets/tateti.png' }
        ];
      }

      return [
        { title: 'Piedra Papel Tijera', cols: 1, rows: 1, foto:'../../../assets/piedraPapelTijeras.png' },
        { title: 'TaTeTi', cols: 1, rows: 1, foto:'../../../assets/tateti.png' }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}

  Jugar(juego : any)
  {
    if(juego.title=="Piedra Papel Tijera")
    {
      this.JugarPPT();
    }
    if(juego.title=="TaTeTi")
    {
      this.JugarTaTeTi();
    }
  }
  JugarPPT()
  {
    alert("Bienvenido a piedra papel tijera");
  }
  JugarTaTeTi()
  {
    alert("Bienvenido a tateti");
  }
}
