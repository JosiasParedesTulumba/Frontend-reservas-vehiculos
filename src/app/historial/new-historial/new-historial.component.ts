import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-historial',
  standalone: false,
  templateUrl: './new-historial.component.html',
  styleUrl: './new-historial.component.css'
})
export class NewHistorialComponent implements OnInit {
  @Input() isOpen: boolean = false;
  @Output() closeModal = new EventEmitter<void>();
  @Output() saveHistorial = new EventEmitter<any>();

  historialForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.historialForm = this.fb.group({
      matricula: ['', Validators.required],
      evento: ['', Validators.required],
      fecha: ['', Validators.required],
      descripcion: ['', Validators.required]
    });
  }

  onBackdropClick(event: Event): void {
    if (event.target === event.currentTarget) {
      this.onClose();
    }
  }

  onClose(): void {
    this.historialForm.reset();
    this.closeModal.emit();
  }

  onSubmit(): void {
    if (this.historialForm.valid) {
      this.saveHistorial.emit(this.historialForm.value);
      this.historialForm.reset();
      this.onClose();
    }
  }
}
