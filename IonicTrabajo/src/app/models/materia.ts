export interface Materia{
    nombre: string;
    semestre: number;
    codigo: string;
    horario: string;
    observaciones: string;
    notas: Nota[];
    promedio?: number;
}

export interface Nota{
    fecha: string;
    descripcion: string;
    nota: number;
    observaciones: string;
    corte: string;
}