# M4_AE2_ABP-Ejercicio individual

## Gestión de Tareas

### Descripción
Proyecto individual para implementar una aplicación de gestión de tareas en consola utilizando **JavaScript ES6**.  
Permite agregar, eliminar, editar y mostrar tareas, aplicando características modernas del lenguaje: clases, herencia, módulos, promesas, Sets, Maps, generadores, entre otros.

### Objetivos
- Practicar el uso de variables con `let`, `const` y `var`.  
- Implementar funciones flecha y parámetros por defecto.  
- Usar interpolación de strings con template literals.  
- Aplicar destructuring en objetos y arrays.  
- Utilizar operadores Spread y Rest.  
- Crear clases con herencia y sobrescritura de métodos.  
- Dividir el proyecto en módulos con `export` e `import`.  
- Manejar colecciones de datos con Sets y Maps.  
- Implementar generadores e iteradores para recorrer tareas.  
- Simular operaciones asíncronas con promesas y `async/await`.  

### Requisitos
- Clase `Tarea` con propiedades: nombre, estado, id, y método `mostrarDetalles()`.  
- Clase `TareaImportante` que herede de `Tarea` e incluya prioridad, sobrescribiendo `mostrarDetalles()`.  
- Función `agregarTarea` con parámetros por defecto y uso de spread.  
- Función `eliminarTarea` que reciba múltiples índices usando Rest.  
- Uso de `Set` para almacenar tareas completadas sin duplicados.  
- Uso de `Map` para registrar tareas con clave = id y valor = objeto tarea.  
- Implementación de un generador para iterar sobre las tareas.  
- Función asíncrona `cargarTareasAsync` que simule la carga de datos.  

### Tecnologías
- JavaScript ES6  
- JSON  

### Estructura del proyecto
```
M4_AE2_ABP-Ejercicio individual
|-- main.js
|-- package.json
|-- readme.md
|-- tareas.js
```

### Instrucciones de uso
1. Abrir el archivo `main.js` en un editor de código.  
2. Ejecutar el archivo en la consola del navegador o usando Node.js.  
3. Observar los resultados de las operaciones en la consola.  

**Autor**: Jorge Rodriguez
