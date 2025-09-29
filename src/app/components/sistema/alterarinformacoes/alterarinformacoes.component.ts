import { Component } from '@angular/core';
import { HeadercadastradoComponent } from "../../headers/headercadastrado/headercadastrado.component";

@Component({
  selector: 'app-alterarinformacoes',
  imports: [HeadercadastradoComponent],
  templateUrl: './alterarinformacoes.component.html',
  styleUrl: './alterarinformacoes.component.css'
})
export class AlterarinformacoesComponent {
fotoPreview: string | ArrayBuffer | null = null;

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = e => this.fotoPreview = reader.result;
      reader.readAsDataURL(file);
    }
  }

  salvar(nome: string, email: string, senha: string) {
    const usuario = { nome, email, senha };

    console.log('Dados atualizados:', usuario);
    console.log('Foto de perfil:', this.fotoPreview);

    alert('Informações salvas com sucesso!');
  }
}
