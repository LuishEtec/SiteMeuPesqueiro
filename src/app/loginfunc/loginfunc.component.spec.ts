import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginfuncComponent } from './loginfunc.component';

describe('LoginfuncComponent', () => {
  let component: LoginfuncComponent;
  let fixture: ComponentFixture<LoginfuncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginfuncComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginfuncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
