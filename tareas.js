// Clase base Tarea
export class Tarea {
  constructor(id, nombre, estado = false) {
    this.id = id
    this.nombre = nombre
    this.estado = estado
  }

  mostrarDetalles() {
    console.log(`Tarea ID ${this.id} — ${this.nombre} — Estado: ${this.estado ? "Completa" : "Pendiente"}`)
  }
}

// Clase TareaImportante que hereda de Tarea
export class TareaImportante extends Tarea {
  constructor(id, nombre, estado = false, prioridad = "Media") {
    super(id, nombre, estado)
    this.prioridad = prioridad
  }

  mostrarDetalles() {
    console.log(`Tarea ID ${this.id} — ${this.nombre} — Estado: ${this.estado ? "Completa" : "Pendiente"} — Prioridad: ${this.prioridad}`)
  }
}
