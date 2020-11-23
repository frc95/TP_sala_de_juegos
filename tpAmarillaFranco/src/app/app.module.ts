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
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';

import { RutaNormalComponent } from './components/ruta-normal/ruta-normal.component';
import { RutaDificilComponent } from './components/ruta-dificil/ruta-dificil.component';
import { PiedraPapelTijeraComponent } from './components/juegos/piedra-papel-tijera/piedra-papel-tijera.component';
import { TatetiComponent } from './components/juegos/tateti/tateti.component';
import { AdivinaNumeroComponent } from './components/juegos/adivina-numero/adivina-numero.component';
import { AgilidadArimeticaComponent } from './components/juegos/agilidad-arimetica/agilidad-arimetica.component';
import { AnagramaComponent } from './components/juegos/anagrama/anagrama.component';
import { MemotestComponent } from './components/juegos/memotest/memotest.component';
import { LoginComponent } from './components/login/login.component';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './components/tablas/select/select.component';
import { TablaPPTComponent } from './components/tablas/tabla-ppt/tabla-ppt.component';
import { TablaTatetiComponent } from './components/tablas/tabla-tateti/tabla-tateti.component';
import { ResultadosComponent } from './components/tablas/resultados/resultados.component';
import { RegistroComponent } from './components/registro/registro.component';
import { TablaAdivinaComponent } from './components/tablas/tabla-adivina/tabla-adivina.component';
import { TablaArimeticaComponent } from './components/tablas/tabla-arimetica/tabla-arimetica.component';
import { MinutosSegundosPipe } from './pipes/minutos-segundos.pipe';
import { TablaMemotestComponent } from './components/tablas/tabla-memotest/tabla-memotest.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    RutaFacilComponent,
    RutaNormalComponent,
    RutaDificilComponent,
    PiedraPapelTijeraComponent,
    TatetiComponent,
    AdivinaNumeroComponent,
    AgilidadArimeticaComponent,
    AnagramaComponent,
    MemotestComponent,
    LoginComponent,
    HomeComponent,
    SelectComponent,
    TablaPPTComponent,
    TablaTatetiComponent,
    ResultadosComponent,
    RegistroComponent,
    TablaAdivinaComponent,
    TablaArimeticaComponent,
    MinutosSegundosPipe,
    TablaMemotestComponent
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
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    AngularFireModule.initializeApp(environment.firebase),
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    MatSelectModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
