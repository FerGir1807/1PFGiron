import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '1PFGiron';

  actualizarAlumnos = false;

  actualizarListaAlumnos() {
    this.actualizarAlumnos = !this.actualizarAlumnos;
  }
}
