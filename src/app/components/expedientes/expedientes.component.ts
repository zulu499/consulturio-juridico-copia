import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expedientes',
  templateUrl: './expedientes.component.html',
  styleUrls: ['./expedientes.component.css']
})
export class ExpedientesComponent {
  expedientes = [
    { id: 1, area: 'Laboral', nombreUsuario: 'Juan Pérez', sintesis: 'Accidente de trabajo', pretension: 'Indemnización', demandado: 'Empresa X', estado: 'Abierto' },
    // Aquí van más datos de ejemplo
  ];

  pages = [1, 2, 3, 4];

  constructor(private router: Router) {}

  verResumen(expediente: any) {
    this.router.navigate(['/detalles-expediente'], { state: { expediente } });
  }

  agregarAnotacion(expediente: any) {
    this.router.navigate(['/actuaciones-expediente'], { state: { expediente } });
  }

  logout() {
    this.router.navigate(['/']);
  }
}
