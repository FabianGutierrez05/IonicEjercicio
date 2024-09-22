// src/app/pages/registro-materia/registro-materia.component.ts
import { Component, OnInit } from '@angular/core';
import { Materia } from '../models/materia';
import { CommonModule } from '@angular/common';
import { MateriaService } from '../services/materia.service';
import { FormsModule } from '@angular/forms';
import  {  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonText,
  IonCard,
  IonCardContent,
  IonInput,
  IonButton,
  IonAlert,
IonLabel,
IonItem,
IonList,
IonTextarea,



   } from '@ionic/angular/standalone';

@Component({
  selector: 'app-registro-materia',
  templateUrl: './reg-materia.page.html',
  styleUrls: ['./reg-materia.page.scss'],
  standalone: true,
  imports: [
    IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonText,
  IonCard,
  IonCardContent,
  IonInput,
  IonButton,
  IonAlert,
  IonLabel,
  IonItem,
  IonList, 
  IonTextarea,
  FormsModule,
  CommonModule

  
  ]
})
export class RegMateriaPage implements OnInit {
  materia: Materia = {
    nombre: '',
    semestre: 1,
    codigo: '',
    horario: '',
    observaciones: '',
  };

  materias: Materia[] = [];

  constructor(private materiaService: MateriaService) {}

  async ngOnInit() {
    await this.cargarMaterias();
  }

  async cargarMaterias() {
    this.materias = await this.materiaService.getMaterias();
  }

  async registrarMateria() {
    if (this.materia.nombre && this.materia.codigo && this.materia.horario) {
      await this.materiaService.agregarMateria(this.materia);
      console.log('Materia registrada:', this.materia);
      await this.cargarMaterias();
      this.limpiarFormulario();
    }
  }

  async eliminarMateria(codigo: string) {
    await this.materiaService.eliminarMateria(codigo);
    await this.cargarMaterias();
  }

  limpiarFormulario() {
    this.materia = {
      nombre: '',
      semestre: 1,
      codigo: '',
      horario: '',
      observaciones: '',
    };
  }
}
