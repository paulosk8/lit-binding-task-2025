# TaskTracker - Componente Web con LitElement

### Autor: Jordan Alexander Guevara Chalial  
Componente: `<task-tracker>`  
Repositorio: https://github.com/JordanGuevara/lit-binding-task-2025.git

---

## Objetivo

Este componente personalizado permite gestionar una **lista de tareas interactiva**, aplicando `@property` para reactividad y actualización dinámica del DOM usando LitElement. Las tareas se cargan desde un archivo externo en `assets/tasks.json`.

---
## Estructura del proyecto:


``` bash
lit-binding-task-2025/
├── task-tracker/
│ ├── src/
│ │ ├── GuevaraTimer.js
│ │ └── index.js
│ ├── public/
│ │ └── assets/
│ │ └── tasks.json
│ ├── styles/
│ │ └── style-tasks.css
│ ├── README.md            # Información del componente
├── index.html
│── webpack.config.js
│── README.md              
└── package.json         

```
## Explicación técnica

### Reactividad
- Aunque el decorador `@property` está comentado, se maneja la propiedad `tasks` como un arreglo reactivo internamente.
- Se usa `this.tasks = [...this.tasks];` al modificar el estado de una tarea para forzar la actualización del componente, ya que Lit no detecta cambios en objetos internos directamente.

---

## Comportamiento del componente

### Datos iniciales (`tasks.json`)

```json
[
  { "text": "Aprender Lit", "done": false },
  { "text": "Hacer tarea", "done": true },
  { "text": "Tomar agua", "done": false }
]
```


### connectedCallback()
Se ejecuta al insertar el componente en el DOM y ayuda a la carga el archivo JSON y actualiza this.tasks.

```js
render() {
  return html`
    <ul>
      ${this.tasks.map(task => html`
        <li class=${task.done ? 'checked' : ''}>
          <input type="checkbox"
                 ?checked=${task.done}
                 @change=${() => this.toggleTask(task)} />
          ${task.text}
        </li>
      `)}
    </ul>
  `;
}

```
### render()
La función `render()` renderiza dinámicamente las tareas en una lista y que se muestra el estado de cada tarea con un checkbox:

```js
render() {
  return html`
    <ul>
      ${this.tasks.map(task => html`
        <li class=${task.done ? 'checked' : ''}>
          <input type="checkbox"
                 ?checked=${task.done}
                 @change=${() => this.toggleTask(task)} />
          ${task.text}
        </li>
      `)}
    </ul>
  `;
}
```
### toggleTask(task)
Cambia el estado done de la tarea al marcar o desmarcar y crea una nueva referencia del array para disparar la reactividad.

```js
toggleTask(task) {
  task.done = !task.done;
  this.tasks = [...this.tasks]; 
}
```