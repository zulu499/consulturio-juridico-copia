import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalles-expediente',
  templateUrl: './detalles-expediente.component.html',
  styleUrls: ['./detalles-expediente.component.css']
})
export class DetallesExpedienteComponent implements OnInit {
  expediente: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.expediente = history.state.expediente;
  }

  actuaciones() {
    this.router.navigate(['/actuaciones-expediente'], { state: { expediente: this.expediente } });
  }

  editar() {
    // Aquí puedes implementar la lógica para editar el expediente
  }
}
