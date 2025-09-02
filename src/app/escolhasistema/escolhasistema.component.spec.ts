import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscolhaSistemaComponent } from './escolhasistema.component';

describe('EscolhasistemaComponent', () => {
  let component: EscolhaSistemaComponent;
  let fixture: ComponentFixture<EscolhaSistemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EscolhaSistemaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EscolhaSistemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
