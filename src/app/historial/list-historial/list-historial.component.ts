import { Component } from '@angular/core';

@Component({
  selector: 'app-list-historial',
  standalone: false,
  templateUrl: './list-historial.component.html',
  styleUrl: './list-historial.component.css'
})
export class ListHistorialComponent {
  isModalOpen = false;

  filtroTipoEvento: string = '';
  filtroFechaEvento: string = '';

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  onSaveHistorial(historialData: any) {
    // Aquí puedes agregar la lógica para guardar el historial
    // Por ahora solo cierra el modal
    this.closeModal();
  }
}
