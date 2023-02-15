import { Component, inject } from '@angular/core';
import {MatSnackBar, MatSnackBarRef} from '@angular/material/snack-bar';

@Component({
  selector: 'app-registro-correcto',
  templateUrl: './registro-correcto.component.html',
  styleUrls: ['./registro-correcto.component.css']
})
export class RegistroCorrectoComponent {
  snackBarRef = inject(MatSnackBarRef);
}
