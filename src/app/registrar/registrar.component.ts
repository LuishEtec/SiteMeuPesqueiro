import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
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
  mostrarRequisito = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.registrarForm = this.fb.group(
      {
        nome: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
        email: ['', [Validators.required, Validators.email]],
        senha: ['', [Validators.required, Validators.minLength(6)]],
        confirmarSenha: ['', [Validators.required]],
      },
      { validators: this.senhasIguaisValidator }
    );
  }

  senhasIguaisValidator(form: AbstractControl) {
    const senha = form.get('senha')?.value;
    const confirmarSenha = form.get('confirmarSenha')?.value;
    return senha === confirmarSenha ? null : { senhasDiferentes: true };
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
