import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { SelectComponent } from '../tablas/select/select.component';
import { TablaPPTComponent } from '../tablas/tabla-ppt/tabla-ppt.component';
import { TablaTatetiComponent } from '../tablas/tabla-tateti/tabla-tateti.component';
import { ResultadosComponent } from '../tablas/resultados/resultados.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  emailUsuario;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private auth : AuthService, private router : Router, public dialog : MatDialog) {
    this.auth.ObtenerEmail().subscribe(auth=>{
      if(auth){
        this.emailUsuario  = auth.email;
       }
    });
  }

  Logout(e)
  {
    e.preventDefault();
    this.router.navigate(['']);
    this.auth.AuthLogout();
  }

  MostrarTabla()
  {
    this.openResultado(ResultadosComponent);
  }

  openResultado(componentHTML : any) {
    const dialogRef = this.dialog.open(componentHTML,{
      height: '600px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
