import { Component } from '@angular/core';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent {
  openPDF(): void {
    window.open('https://drive.google.com/drive/folders/1rjpntJg6eQmTr8NoS9Dgn9o3vNGCBbEu?usp=sharing', '_blank');
  }
}
