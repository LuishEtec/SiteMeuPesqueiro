import { Component } from '@angular/core';
import { HeadercadastradoComponent } from "../../headers/headercadastrado/headercadastrado.component";

@Component({
  selector: 'app-alterarinformacoes',
  standalone: true,
  imports: [HeadercadastradoComponent],
  templateUrl: './alterarinformacoes.component.html',
  styleUrls: ['./alterarinformacoes.component.css']
})
export class AlterarinformacoesComponent {
  iconeusuario: string = "usericon.png"
  fotoPreview: string | ArrayBuffer | null = null;
  mensagem: string = '';

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => this.fotoPreview = reader.result;
      reader.readAsDataURL(file);
    }
  }

  salvar(nome: string, email: string, senha: string) {
    const usuario = { nome, email, senha };

    console.log('Dados atualizados:', usuario);
    console.log('Foto de perfil:', this.fotoPreview);

    this.mensagem = 'Informações salvas com sucesso!';

  }
}
