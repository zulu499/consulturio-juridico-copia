import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios-externos',
  templateUrl: './usuarios-externos.component.html',
  styleUrls: ['./usuarios-externos.component.scss']
})
export class UsuariosExternosComponent {
  usuarios = [
    { documento: '12345678', nombre: 'Ana Gómez', telefono: '3101234567', correo: 'ana@gmail.com' },
    // Otros usuarios
  ];

  constructor(private router: Router) {}

  verExpedientes(usuario: any) {
    this.router.navigate(['/ver-expedientes'], { state: { usuario } });
  }
}
