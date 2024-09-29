// src/app/services/materia.service.ts
import { Injectable } from '@angular/core';
import { Materia, Nota } from '../models/materia';

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
  } async agregarNota(codigo: string, nota: Nota): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const materia = this.materias.find((m) => m.codigo === codigo);
        if (materia) {
          const notaExistente = materia.notas.find((n) => n.corte === nota.corte);
          if (!notaExistente && materia.notas.length < 4) {
            materia.notas.push(nota);
            this.guardarMaterias();
          }
        }
        resolve();
      }, 500);
    });
  }

  async modificarNota(codigo: string, corte: string, nuevaNota: number): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const materia = this.materias.find((m) => m.codigo === codigo);
        if (materia) {
          const nota = materia.notas.find((n) => n.corte === corte);
          if (nota) {
            nota.nota = nuevaNota;
            this.guardarMaterias();
          }
        }
        resolve();
      }, 500);
    });
  }

  async eliminarNota(codigo: string, corte: string): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const materia = this.materias.find((m) => m.codigo === codigo);
        if (materia) {
          materia.notas = materia.notas.filter((n) => n.corte !== corte);
          this.guardarMaterias();
        }
        resolve();
      }, 500);
    });
  }
}