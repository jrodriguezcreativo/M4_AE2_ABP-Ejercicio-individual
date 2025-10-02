import { Tarea, TareaImportante } from "./tareas.js"

// Lista de tareas
let tareas = []

// Contador para asignar IDs únicos
let idCounter = 1

// Set para tareas completadas
const tareasCompletadas = new Set()

// Map para almacenar tareas por ID
const mapaTareas = new Map()

// Función para agregar una tarea
const agregarTarea = (nombre, estado = false, prioridad) => {
  let nuevaTarea
  if (prioridad) {
    nuevaTarea = new TareaImportante(idCounter++, nombre, estado, prioridad)
  } else {
    nuevaTarea = new Tarea(idCounter++, nombre, estado)
  }

  tareas = [...tareas, nuevaTarea]
  mapaTareas.set(nuevaTarea.id, nuevaTarea)

  if (nuevaTarea.estado) {
    tareasCompletadas.add(nuevaTarea.id)
  }

  return nuevaTarea
}

// Función para mostrar todas las tareas
const mostrarTareas = () => {
  if (tareas.length === 0) {
    console.log("No hay tareas registradas.")
    return
  }

  console.log(`\nListado de tareas (${tareas.length}):`)
  tareas.forEach(tarea => tarea.mostrarDetalles())
}

// Función para eliminar tareas por ID usando Rest
const eliminarTarea = (...ids) => {
  const idsSet = new Set(ids)
  const antes = tareas.length
  tareas = tareas.filter(t => !idsSet.has(t.id))

  ids.forEach(id => {
    mapaTareas.delete(id)
    tareasCompletadas.delete(id)
  })

  console.log(`\nSe eliminaron ${antes - tareas.length} tarea(s).`)
}

// Generador para recorrer las tareas
function* generadorTareas(tareasArray) {
  for (let i = 0; i < tareasArray.length; i++) {
    yield { indice: i + 1, tarea: tareasArray[i] }
  }
}

// Función para mostrar tareas completadas usando Set
const mostrarTareasCompletadas = () => {
  if (tareasCompletadas.size === 0) {
    console.log("\nNo hay tareas completadas.")
    return
  }

  console.log("\nTareas completadas:")
  tareasCompletadas.forEach(id => {
    const tarea = mapaTareas.get(id)
    tarea.mostrarDetalles()
  })
}

// Simular carga asíncrona de tareas
const cargarTareasAsync = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const tareasSimuladas = [
        { nombre: "Revisar emails", estado: false },
        { nombre: "Planificar reunión", estado: true, prioridad: "Alta" }
      ]
      resolve(tareasSimuladas)
    }, 1500) // 1.5 segundos
  })
}

// Función para cargar tareas usando async/await
const inicializarTareas = async () => {
  console.log("\nCargando tareas desde servidor simulado...")
  const tareasRemotas = await cargarTareasAsync()

  tareasRemotas.forEach(t => agregarTarea(t.nombre, t.estado, t.prioridad))
  console.log("Tareas cargadas:")
  mostrarTareas()
  mostrarTareasCompletadas()
}

// Ejemplo de uso
console.log("=== Pruebas iniciales ===")
agregarTarea("Comprar leche")
agregarTarea("Enviar informe", true, "Alta")
agregarTarea("Llamar al cliente")
mostrarTareas()
mostrarTareasCompletadas()

console.log("=== Pruebas de eliminación ===")
eliminarTarea(2)
mostrarTareas()
mostrarTareasCompletadas()

console.log("=== Pruebas con generador ===")
for (const { indice, tarea } of generadorTareas(tareas)) {
  console.log(`Tarea ${indice}:`)
  tarea.mostrarDetalles()
}

// Cargar tareas asíncronas
inicializarTareas()
