import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actuaciones-expediente',
  templateUrl: './actuaciones-expediente.component.html',
  styleUrls: ['./actuaciones-expediente.component.css']
})
export class ActuacionesExpedienteComponent implements OnInit {
  expediente: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.expediente = history.state.expediente;
  }
}
