import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerExpedientesComponent } from './ver-expedientes.component';

describe('VerExpedientesComponent', () => {
  let component: VerExpedientesComponent;
  let fixture: ComponentFixture<VerExpedientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerExpedientesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerExpedientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
