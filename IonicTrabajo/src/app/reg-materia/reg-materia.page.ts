// src/app/pages/registro-materia/registro-materia.component.ts
import { Component, OnInit } from '@angular/core';
import { Materia, Nota } from '../models/materia';
import { RouterModule } from '@angular/router';
import { MateriaService } from '../services/materia.service';
import { FormsModule, FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
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
  CommonModule,
  RouterModule,
  ReactiveFormsModule

  
  ]
})
export class RegMateriaPage implements OnInit {
  materiaForm: FormGroup= new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    semestre: new FormControl('', [Validators.required]),
    codigo: new FormControl('', [Validators.required]),
    horario: new FormControl('', [Validators.required]),
    observaciones: new FormControl('', [Validators.required]),

  })


  materia: Materia = {
    nombre: '',
    semestre: 0,
    codigo: '',
    horario: '',
    observaciones: '',
    notas:[],
  };
  nota: Nota= {
    fecha: '',
    descripcion: '',
    nota: 1,
    observaciones: '',
    corte: '',
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
    
      await this.materiaService.agregarMateria(this.materia);
      console.log('Materia registrada:', this.materia);
      await this.cargarMaterias();
      window.location.reload();
      
    
  }

  async eliminarMateria(codigo: string) {
    await this.materiaService.eliminarMateria(codigo);
    await this.cargarMaterias();
  }
  async agregarNota(codigo: string) {
    await this.materiaService.agregarNota(codigo, this.nota);
    await this.cargarMaterias();
  }

  async modificarNota(codigo: string, corte: string) {
    await this.materiaService.modificarNota(codigo, corte, this.nota.nota);
    await this.cargarMaterias();
  }

  async eliminarNota(codigo: string, corte: string) {
    await this.materiaService.eliminarNota(codigo, corte);
    await this.cargarMaterias();
  }

  
}
