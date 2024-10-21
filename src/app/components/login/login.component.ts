
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private router: Router) {}

  login() {
    // Aquí va la lógica para iniciar sesión, por ejemplo, navegar a otra página
    this.router.navigate(['/expedientes']); // Navega a la ruta "expedientes"
  }

  soyUpb() {
    this.router.navigate(['/usuarios-externos']); // Navega a la ruta "usuarios-externos"
  }
}
