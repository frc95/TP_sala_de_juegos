import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RutaFacilComponent } from './components/ruta-facil/ruta-facil.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { RutaNormalComponent } from './components/ruta-normal/ruta-normal.component';
import { RutaDificilComponent } from './components/ruta-dificil/ruta-dificil.component';
import { MatDialogModule } from '@angular/material/dialog';
import { PiedraPapelTijeraComponent } from './components/juegos/piedra-papel-tijera/piedra-papel-tijera.component';
import { TatetiComponent } from './components/juegos/tateti/tateti.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    RutaFacilComponent,
    RutaNormalComponent,
    RutaDificilComponent,
    PiedraPapelTijeraComponent,
    TatetiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
