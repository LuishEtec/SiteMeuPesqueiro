import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-esqueceusenha',
  imports: [HeaderComponent, ReactiveFormsModule],
  templateUrl: './esqueceusenha.component.html',
  styleUrl: './esqueceusenha.component.css'
})
export class EsqueceusenhaComponent {
   esqueceusenhaForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.esqueceusenhaForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

}
