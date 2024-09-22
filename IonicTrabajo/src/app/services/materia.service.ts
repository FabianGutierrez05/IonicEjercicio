// src/app/services/materia.service.ts
import { Injectable } from '@angular/core';
import { Materia } from '../models/materia';

@Injectable({
  providedIn: 'root',
})
export class MateriaService {
  private materias: Materia[] = [];
  private storageKey = 'materias';

  constructor() {
    this.cargarMaterias();
  }

  private cargarMaterias() {
    const storedMaterias = localStorage.getItem(this.storageKey);
    if (storedMaterias) {
      this.materias = JSON.parse(storedMaterias);
    }
  }

  private guardarMaterias() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.materias));
  }

  async getMaterias(): Promise<Materia[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.materias);
      }, 500); // Simulamos una operación asíncrona con un retraso de 0.5 segundos
    });
  }

  async agregarMateria(materia: Materia): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.materias.push(materia);
        this.guardarMaterias();
        resolve();
      }, 500);
    });
  }

  async eliminarMateria(codigo: string): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.materias = this.materias.filter((materia) => materia.codigo !== codigo);
        this.guardarMaterias();
        resolve();
      }, 500);
    });
  }

  async editarMateria(codigo: string, nuevaMateria: Materia): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const index = this.materias.findIndex((materia) => materia.codigo === codigo);
        if (index > -1) {
          this.materias[index] = nuevaMateria;
          this.guardarMaterias();
        }
        resolve();
      }, 500);
    });
  }
}
