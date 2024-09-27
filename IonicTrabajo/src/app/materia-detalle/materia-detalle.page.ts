import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MateriaService } from '../services/materia.service';
import { Materia } from '../models/materia';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonText,
  IonCard,
  IonCardContent,
  IonInput,
  IonButton,
  IonAlert,
IonLabel,
IonItem,
IonList,
IonTextarea, } from '@ionic/angular/standalone';

@Component({
  selector: 'app-materia-detalle',
  templateUrl: './materia-detalle.page.html',
  styleUrls: ['./materia-detalle.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonText,
    IonCard,
    IonCardContent,
    IonInput,
    IonButton,
    IonAlert,
  IonLabel,
  IonItem,
  IonList,
  IonTextarea,
RouterModule]
})
export class MateriaDetallePage implements OnInit {codigo: string = '';
  materia: Materia | undefined;

  constructor(private route: ActivatedRoute, private materiaService: MateriaService) {
    this.codigo = this.route.snapshot.paramMap.get('codigo') || '';
  }

  async ngOnInit() {
    const materias = await this.materiaService.getMaterias();
    this.materia = materias.find(m => m.codigo === this.codigo);
  }
}
