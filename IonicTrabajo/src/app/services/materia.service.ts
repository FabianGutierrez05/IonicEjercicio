import { Injectable } from '@angular/core';
import { Materia } from '../models/materia';

@Injectable({
  providedIn: 'root'
})
export class MateriaService {
  private materias: Materia[]= [];


  constructor() { }
  async getMaterias(): Promise<Materia[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.materias);
      }, 1000); // Simula una operación asíncrona con un retraso de 1 segundo
    });
  }

  async agregarMateria(materia: Materia): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.materias.push(materia);
        resolve();
      }, 1000); // Simula un retraso de 1 segundo
    });
  }

  async eliminarMateria(codigo: string): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.materias = this.materias.filter((materia) => materia.codigo !== codigo);
        resolve();
      }, 1000); // Simula un retraso de 1 segundo
    });
  }

  async editarMateria(codigo: string, nuevaMateria: Materia): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const index = this.materias.findIndex((materia) => materia.codigo === codigo);
        if (index > -1) {
          this.materias[index] = nuevaMateria;
        }
        resolve();
      }, 1000); // Simula un retraso de 1 segundo
    });
  }
}