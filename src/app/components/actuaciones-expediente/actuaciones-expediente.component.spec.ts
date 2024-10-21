import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActuacionesExpedienteComponent } from './actuaciones-expediente.component';

describe('ActuacionesExpedienteComponent', () => {
  let component: ActuacionesExpedienteComponent;
  let fixture: ComponentFixture<ActuacionesExpedienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActuacionesExpedienteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActuacionesExpedienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
