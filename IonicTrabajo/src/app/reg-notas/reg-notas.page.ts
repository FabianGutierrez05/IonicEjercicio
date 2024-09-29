import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Materia, Nota } from '../models/materia';
import { MateriaService } from '../services/materia.service';
import { ActivatedRoute } from '@angular/router';

import { IonContent, IonHeader, IonTitle, IonToolbar,IonList, IonItem, IonLabel, IonButton, IonInput, IonSelect,IonSelectOption } from '@ionic/angular/standalone';

@Component({
  selector: 'app-reg-notas',
  templateUrl: './reg-notas.page.html',
  styleUrls: ['./reg-notas.page.scss'],
  standalone: true,
  imports: [IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    CommonModule, 
    FormsModule,
    IonList,
    IonItem,
    IonLabel,
    IonButton,
    ReactiveFormsModule,
    IonInput,
  IonSelect, IonSelectOption]
})
export class RegNotasPage implements OnInit {
  notasForm: FormGroup= new FormGroup({
    corte: new FormControl('', [Validators.required]),
    nota: new FormControl('', [Validators.required]),
    fecha: new FormControl('', [Validators.required]),
    descripcion: new FormControl('', [Validators.required]),
    observaciones: new FormControl('', [Validators.required]), 
  })


  codigo: string;
  materia: Materia | undefined;
  nota: Nota = {
    fecha: '',
    descripcion: '',
    nota: 0,
    observaciones: '',
    corte: 'Corte 1',
  };
  constructor( 
    private route: ActivatedRoute,
    private materiaService: MateriaService
  ) {
    this.codigo = this.route.snapshot.paramMap.get('codigo') || '';
  }

  async ngOnInit() {
    await this.cargarMateria();
  }

  async cargarMateria() {
    const materias = await this.materiaService.getMaterias();
    this.materia = materias.find(m => m.codigo === this.codigo);
  }

  async agregarNota() {
    if (this.materia) {
      await this.materiaService.agregarNota(this.codigo, this.nota);
      await this.cargarMateria();
    
    }
  }

  //async modificarNota(corte: number) {
   // if (this.materia) {
     // await this.materiaService.modificarNota(this.codigo, corte, this.nota);
      //await this.cargarMateria();
    //}
  //}

  async eliminarNota(corte: string) {
    if (this.materia) {
      await this.materiaService.eliminarNota(this.codigo, corte);
      await this.cargarMateria();
    }
  }

}