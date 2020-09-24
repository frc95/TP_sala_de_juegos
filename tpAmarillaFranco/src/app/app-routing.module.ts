import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RutaDificilComponent } from './components/ruta-dificil/ruta-dificil.component';
import { RutaFacilComponent } from './components/ruta-facil/ruta-facil.component';
import { RutaNormalComponent } from './components/ruta-normal/ruta-normal.component';

const routes: Routes = [
  {
    path:'ruta-facil',
    component: RutaFacilComponent
  },
  {
    path:'ruta-normal',
    component: RutaNormalComponent
  },
  {
    path:'ruta-dificil',
    component: RutaDificilComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
