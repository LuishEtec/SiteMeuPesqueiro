import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarinformacoesComponent } from './alterarinformacoes.component';

describe('AlterarinformacoesComponent', () => {
  let component: AlterarinformacoesComponent;
  let fixture: ComponentFixture<AlterarinformacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlterarinformacoesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlterarinformacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
