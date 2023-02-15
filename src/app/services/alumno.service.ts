import { Injectable } from '@angular/core';
import { Alumno } from '../models/alumno';


@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  private listaAlumnos: Alumno[] = [];
  constructor() {
  }

  obtenerAlumnos(): Alumno[] {
    return this.listaAlumnos;
  }

  agregarAlumno(alumno: Alumno) {
    this.listaAlumnos.push(alumno);
  }

  editarAlumno(alumno: Alumno): void {
    const index = this.listaAlumnos.findIndex(element => element.id === alumno.id);
    this.listaAlumnos[index] = alumno;
  }

  eliminarAlumno(idAlumno: string): void {
    const index = this.listaAlumnos.findIndex(element => element.id === idAlumno);
    this.listaAlumnos.splice(index, 1);
  }
}
