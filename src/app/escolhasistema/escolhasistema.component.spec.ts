import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscolhasistemaComponent } from './escolhasistema.component';

describe('EscolhasistemaComponent', () => {
  let component: EscolhasistemaComponent;
  let fixture: ComponentFixture<EscolhasistemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EscolhasistemaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EscolhasistemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
