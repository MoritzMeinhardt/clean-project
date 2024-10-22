import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatCheckbox } from '@angular/material/checkbox';
import {
  MatError,
  MatFormField,
  MatLabel
} from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import {
  MatRadioButton,
  MatRadioGroup
} from '@angular/material/radio';
import {
  MatOption,
  MatSelect
} from '@angular/material/select';
import { MatSlideToggle } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-angular-material-test',
  standalone: true,
  imports: [
    CommonModule,
    MatSlideToggle,
    MatFormField,
    MatSelect,
    MatInput,
    MatOption,
    MatLabel,
    MatCheckbox,
    MatRadioGroup,
    MatRadioButton,
    MatError,
    FormsModule,
    ReactiveFormsModule,
    MatButton,
    MatIcon
  ],
  templateUrl: './angular-material-test.component.html'
})
export class AngularMaterialTestComponent {
  control = new FormControl(undefined, Validators.required);
}
