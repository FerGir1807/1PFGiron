import { Component, Input, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { EditarAlumnoComponent } from 'src/app/components/alumno/editar-alumno/editar-alumno.component';
import { Alumno } from 'src/app/models/alumno';
import { AlumnoService } from 'src/app/services/alumno.service';
import { RegistroCorrectoComponent } from '../registro-correcto/registro-correcto.component';

@Component({
  selector: 'app-lista-alumno',
  templateUrl: './lista-alumno.component.html',
  styleUrls: ['./lista-alumno.component.css']
})
export class AlumnosComponent {

  listaAlumnos: Array<Alumno> = [];
  dataSource: MatTableDataSource<Alumno>;
  columnas: String[] = ["nombreCompleto", "edad", "genero", "estatus", "acciones"];
  formularioRegistroAlumno: FormGroup;
  controles: any;
  duracion = 5;

  constructor(public dialog: MatDialog, private alumnoService: AlumnoService, private _snackBar: MatSnackBar) {
    this.listaAlumnos = alumnoService.obtenerAlumnos();
    this.dataSource = new MatTableDataSource<Alumno>(this.listaAlumnos);

    let regEx: string = "^[a-zA-Z ]+$";
    this.controles = {
      nombre: new FormControl("", [Validators.required, Validators.minLength(2), Validators.pattern(regEx)]),
      segundoNombre: new FormControl("", [Validators.minLength(2), Validators.pattern(regEx)]),
      primerApellido: new FormControl("", [Validators.required, Validators.minLength(2), Validators.pattern(regEx)]),
      segundoApellido: new FormControl("", [Validators.minLength(2), Validators.pattern(regEx)]),
      edad: new FormControl("", [Validators.min(18), Validators.max(99), Validators.required]),
      genero: new FormControl("", [Validators.required]),
      estatus: new FormControl("")
    }

    this.formularioRegistroAlumno = new FormGroup(this.controles);
  }

  ngOnInit() {
    this.listaAlumnos = this.alumnoService.obtenerAlumnos();
    this.dataSource = new MatTableDataSource<Alumno>(this.listaAlumnos);
  }

  editarAlumno(alumno: Alumno): void {

    const dialogRef = this.dialog.open(EditarAlumnoComponent, {
      data: alumno
    });

    dialogRef.afterClosed().subscribe(() => {
      this.listaAlumnos = this.alumnoService.obtenerAlumnos();
      this.ngOnInit();
    });

  }

  eliminarAlumno(idAlumno: string) {
    this.alumnoService.eliminarAlumno(idAlumno);
    this.ngOnInit();
  }

  registrarAlumno() {

    let alumno: Alumno = {
      id: this.generaId(5),
      nombre: this.controles.nombre.value,
      segundoNombre: this.controles.segundoNombre.value,
      primerApellido: this.controles.primerApellido.value,
      segundoApellido: this.controles.segundoApellido.value,
      edad: this.controles.edad.value,
      genero: this.controles.genero.value,
      estatus: true
    };

    this.alumnoService.agregarAlumno(alumno);
    this.openSnackBar();
    this.ngOnInit();
    this.formularioRegistroAlumno.reset()

  }

  generaId(longitud: number) {
    let resultado = '';
    const caracteres = '0123456789';
    const charactersLength = caracteres.length;
    let contador = 0;
    while (contador < length) {
      resultado += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
      contador += 1;
    }
    return resultado;
  }

  openSnackBar() {
    this._snackBar.openFromComponent(RegistroCorrectoComponent, {
      duration: this.duracion * 1000,
    });
  }
}
