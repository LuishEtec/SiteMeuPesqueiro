import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-registrar',
  imports:[HeaderComponent, ReactiveFormsModule],
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent {
  registrarForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.registrarForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onRegistrar() {
    if (this.registrarForm.valid) {
      console.log('Dados do formulário:', this.registrarForm.value);
      this.router.navigate(['/escolhasistema']);
    }
  }
  navigateToLogin(): void {
    this.router.navigate(['/login']);
  }
}
