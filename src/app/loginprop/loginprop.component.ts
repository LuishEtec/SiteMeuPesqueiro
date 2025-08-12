import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-loginprop',
  imports:[HeaderComponent],
  templateUrl: './loginprop.component.html',
  styleUrls: ['./loginprop.component.css']
})
export class LoginpropComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      console.log('Dados do formulário:', this.loginForm.value);
      this.router.navigate(['/inicio']);
    }
  }
}
