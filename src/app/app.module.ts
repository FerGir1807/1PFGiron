import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { AlumnosComponent } from './components/alumno/lista-alumno/lista-alumno.component';
import { EditarAlumnoComponent } from './components/alumno/editar-alumno/editar-alumno.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AlumnoService } from './services/alumno.service';
import { NombreAlumnoPipe } from './pipes/nombre-alumno.pipe';
import { EstatusAlumnoDirective } from './directives/estatus-alumno.directive';
import { TamanoLetraTituloDirective } from './directives/tamano-letra-titulo.directive';
import { RegistroCorrectoComponent } from './components/alumno/registro-correcto/registro-correcto.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ToolbarComponent,
    AlumnosComponent,
    EditarAlumnoComponent,
    NombreAlumnoPipe,
    EstatusAlumnoDirective,
    TamanoLetraTituloDirective,
    RegistroCorrectoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule
  ],
  providers: [AlumnoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
