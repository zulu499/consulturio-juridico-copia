import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ver-expedientes',
  templateUrl: './ver-expedientes.component.html',
  styleUrls: ['./ver-expedientes.component.css']
})
export class VerExpedientesComponent implements OnInit {
  usuario: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.usuario = history.state.usuario;
  }
}
