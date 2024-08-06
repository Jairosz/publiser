import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingComponent } from './landing/landing.component';
import { ArticulosComponent } from './fachadas/fachadas.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { RotulacionesComponent } from "./rotulaciones/rotulaciones.component";
import { ContactoComponent } from './contacto/contacto.component';
import { ImprentaComponent } from './imprenta/imprenta.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, LandingComponent, ServiciosComponent, ArticulosComponent, RotulacionesComponent, RotulacionesComponent, ContactoComponent, ImprentaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'publiser_client';
}
