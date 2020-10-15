import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material/dialog';
import { AnagramaComponent } from '../juegos/anagrama/anagrama.component';
import { MemotestComponent } from '../juegos/memotest/memotest.component';

@Component({
  selector: 'app-ruta-dificil',
  templateUrl: './ruta-dificil.component.html',
  styleUrls: ['./ruta-dificil.component.css']
})
export class RutaDificilComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Anagrama', cols: 1, rows: 1, foto:'../../../assets/anagrama.png' },
          { title: 'Memotest', cols: 1, rows: 1, foto:'../../../assets/memotest.png' }
        ];
      }

      return [
        { title: 'Anagrama', cols: 1, rows: 1, foto:'../../../assets/anagrama.png' },
        { title: 'Memotest', cols: 1, rows: 1, foto:'../../../assets/memotest.png' }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver, public dialog : MatDialog) {}

  Jugar(juego : any)
  {
    if(juego.title=="Anagrama")
    {
      this.openDialog(AnagramaComponent);
    }
    if(juego.title=="Memotest")
    {
      this.openDialog(MemotestComponent);
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
