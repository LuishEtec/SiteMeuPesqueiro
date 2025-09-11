import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../headers/header/header.component';

@Component({
  selector: 'app-login',
  imports:[HeaderComponent, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
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
      this.router.navigate(['/escolhasistema']);
    }
  }
   navigateToRegistrar(): void {
    this.router.navigate(['/registrar']);
  }
  navigateToEsqueceuSenha(): void {
    this.router.navigate(['/esqueceusenha'])
  }
}
