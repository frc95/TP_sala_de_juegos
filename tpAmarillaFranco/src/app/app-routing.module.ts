import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RutaDificilComponent } from './components/ruta-dificil/ruta-dificil.component';
import { RutaFacilComponent } from './components/ruta-facil/ruta-facil.component';
import { RutaNormalComponent } from './components/ruta-normal/ruta-normal.component';
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
       
      }
    ]
  },
  {
    path:'',
    component: LoginComponent
  },
  /*{
    path: 'ruta-facil',
    component: RutaFacilComponent,
    outlet : 'juegos'
  },
  {
    path:'ruta-normal',
    component: RutaNormalComponent,
    outlet : 'juegos'
  },
  {
    path:'ruta-dificil',
    component: RutaDificilComponent,
    outlet : 'juegos'
  }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
