import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MateriaService } from '../services/materia.service';
import { Materia } from '../models/materia';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonText,
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
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonText,
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
export class MateriaDetallePage implements OnInit {
  codigo: string = '';
  materia: Materia | undefined;

  promPrimerCorte: number | null=null;
  promSegundoCorte: number | null=null;
  promTercerCorte: number | null=null;
  promCuartoCorte: number | null=null;
  
  constructor(private route: ActivatedRoute, private materiaService: MateriaService) {
    this.codigo = this.route.snapshot.paramMap.get('codigo') || '';
  }

  async ngOnInit() {
    const materias = await this.materiaService.getMaterias();
    this.materia = materias.find(m => m.codigo === this.codigo);

    
    if (this.materia) {
      const promedio = await this.materiaService.calcularPromedio(this.codigo);
      this.materia.promedio = promedio !== null ? promedio : 0;
      this.promPrimerCorte = await this.materiaService.calcularPromedioPorCorte(this.codigo, 'Corte 1');
      this.promSegundoCorte = await this.materiaService.calcularPromedioPorCorte(this.codigo, 'Corte 2');
      this.promTercerCorte = await this.materiaService.calcularPromedioPorCorte(this.codigo, 'Corte 3');
      this.promCuartoCorte = await this.materiaService.calcularPromedioPorCorte(this.codigo, 'Corte 4');
    }
  }
}
