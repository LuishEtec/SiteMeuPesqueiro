import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { NgIf } from "../../../node_modules/@angular/common/common_module.d-NEF7UaHr";

@Component({
  selector: 'app-esqueceusenha',
  imports: [HeaderComponent, ReactiveFormsModule],
  templateUrl: './esqueceusenha.component.html',
  styleUrl: './esqueceusenha.component.css'
})
export class EsqueceusenhaComponent {
   esqueceusenhaForm: FormGroup;
   mensagem: string ='';

  constructor(private fb: FormBuilder, private router: Router) {
    this.esqueceusenhaForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }
  enviarEmail() {
    if (this.esqueceusenhaForm.valid) {
      console.log('Dados do formulário:', this.esqueceusenhaForm.value);
      this.mensagem = 'Enviamos um email para você resetar sua senha.';
    } 
  }

}
