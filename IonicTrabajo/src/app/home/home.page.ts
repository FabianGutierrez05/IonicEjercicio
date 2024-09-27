import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonButton } from '@ionic/angular/standalone';
import { Materia } from '../models/materia';
import { Router} from '@angular/router';
import { RouterModule } from '@angular/router';
import { MateriaService } from '../services/materia.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent,
    IonList,
    IonItem,
    IonLabel,
  FormsModule, CommonModule, RouterModule, IonButton],
})
export class HomePage {
  materias: Materia[] = [];

  constructor(private materiaService: MateriaService, private router: Router) {}

  async ngOnInit() {
    this.materias = await this.materiaService.getMaterias();
  }

  verMateria(codigo: string) {
    // Navegar a la página de detalles de la materia con el código como parámetro
    this.router.navigate(['/detalle-materia', codigo]);
  }
  async cargarMaterias() {
    this.materias = await this.materiaService.getMaterias();
  }
  async eliminarMateria(codigo: string) {
    await this.materiaService.eliminarMateria(codigo);
    await this.cargarMaterias();
  }
}