import { Component, Inject, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Alumno } from 'src/app/models/alumno';
import { AlumnoService } from 'src/app/services/alumno.service';

@Component({
  selector: 'app-editar-alumno',
  templateUrl: './editar-alumno.component.html',
  styleUrls: ['./editar-alumno.component.css']
})
export class EditarAlumnoComponent {
  formularioEditarAlumno: FormGroup;
  controles: any;

  constructor(
    
    private dialogRef: MatDialogRef<EditarAlumnoComponent>,

    @Inject(MAT_DIALOG_DATA) public data: Alumno, private alumnoService: AlumnoService) {
    let regEx: string = "^[a-zA-Z ]+$";
    this.controles = {
      nombre: new FormControl(data.nombre, [Validators.required, Validators.minLength(2), Validators.pattern(regEx)]),
      segundoNombre: new FormControl(data.segundoNombre, [Validators.minLength(2), Validators.pattern(regEx)]),
      primerApellido: new FormControl(data.primerApellido, [Validators.required, Validators.minLength(2), Validators.pattern(regEx)]),
      segundoApellido: new FormControl(data.segundoApellido, [Validators.minLength(2), Validators.pattern(regEx)]),
      edad: new FormControl(data.edad, [Validators.min(18), Validators.max(99), Validators.required]),
      genero: new FormControl(data.genero, [Validators.required]),
      estatus: new FormControl(data.estatus, [Validators.required])
    };

    this.formularioEditarAlumno = new FormGroup(this.controles);
  }


  editarAlumno() {
    
    let alumno: Alumno = {
      id: this.data.id,
      nombre: this.controles.nombre.value,
      segundoNombre: this.controles.segundoNombre.value,
      primerApellido: this.controles.primerApellido.value,
      segundoApellido: this.controles.segundoApellido.value,
      edad: this.controles.edad.value,
      genero: this.controles.genero.value,
      estatus: false
    };
    console.log("Se va a guardar el alumno editado : " , alumno);
    
    this.alumnoService.editarAlumno(alumno);
    this.dialogRef.close();
  }
}
