import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material/dialog';
import { AdivinaNumeroComponent } from '../juegos/adivina-numero/adivina-numero.component';
import { AgilidadArimeticaComponent } from '../juegos/agilidad-arimetica/agilidad-arimetica.component';

@Component({
  selector: 'app-ruta-normal',
  templateUrl: './ruta-normal.component.html',
  styleUrls: ['./ruta-normal.component.css']
})
export class RutaNormalComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Adivina el numero', cols: 1, rows: 1, foto:'../../../assets/adivina.png'},
          { title: 'Agilidad arimetica', cols: 1, rows: 1, foto:'../../../assets/agilidad.png' }
          
        ];
      }

      return [
        { title: 'Adivina el numero', cols: 1, rows: 1, foto:'../../../assets/adivina.png' },
        { title: 'Agilidad arimetica', cols: 1, rows: 1, foto:'../../../assets/agilidad.png' }
        
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver, public dialog : MatDialog) {}

  Jugar(juego : any)
  {
    if(juego.title=="Adivina el numero")
    {
      this.openDialog(AdivinaNumeroComponent);
    }
    if(juego.title=="Agilidad arimetica")
    {
      this.openDialog(AgilidadArimeticaComponent);
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
