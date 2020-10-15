import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material/dialog';
import { PiedraPapelTijeraComponent } from '../juegos/piedra-papel-tijera/piedra-papel-tijera.component';
import { TatetiComponent } from '../juegos/tateti/tateti.component';

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

  constructor(private breakpointObserver: BreakpointObserver, public dialog : MatDialog) {}

  Jugar(juego : any)
  {
    if(juego.title=="Piedra Papel Tijera")
    {
      this.openDialog(PiedraPapelTijeraComponent);
    }
    if(juego.title=="TaTeTi")
    {
      this.openDialog(TatetiComponent);
    }
  }
  

  openDialog(componentHTML : any) {
    const dialogRef = this.dialog.open(componentHTML,{
      height: '600px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


}
