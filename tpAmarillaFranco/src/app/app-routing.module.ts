import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RegistroComponent } from './components/registro/registro.component';
import { RutaDificilComponent } from './components/ruta-dificil/ruta-dificil.component';
import { RutaFacilComponent } from './components/ruta-facil/ruta-facil.component';
import { RutaNormalComponent } from './components/ruta-normal/ruta-normal.component';
import { SelectComponent } from './components/tablas/select/select.component';
import { TablaPPTComponent } from './components/tablas/tabla-ppt/tabla-ppt.component';
import { TablaTatetiComponent } from './components/tablas/tabla-tateti/tabla-tateti.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {
    path:'navigation',
    component: NavigationComponent,
    canActivate : [LoginGuard],
    children:[
      {
        path: 'ruta-facil',
        outlet : 'juegos',
        component: RutaFacilComponent,
        
      },
      {
        path:'ruta-normal',
        outlet : 'juegos',
        component: RutaNormalComponent,
        
      },
      {
        path:'ruta-dificil',
        outlet : 'juegos',
        component: RutaDificilComponent,
      },
      {
        path:'ResultPPT',
        component: TablaPPTComponent,
        outlet : 'resultados',
      },
      {
        path:'ResultTateti',
        component: TablaTatetiComponent,
        outlet : 'resultados',
      },
    ]
  },
  {
    path:'',
    component: LoginComponent
  },
  {
    path:'registro',
    component: RegistroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
