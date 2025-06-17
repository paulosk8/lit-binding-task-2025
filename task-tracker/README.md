# TaskTracker - Componente Web con LitElement

### Autor: Jordan Alexander Guevara Chalial  
Componente: `<task-tracker>`  
Repositorio: https://github.com/paulosk8/lit-binding-task-2025

---

## Objetivo

Este componente personalizado permite gestionar una **lista de tareas interactiva**, aplicando `@property` para reactividad y actualización dinámica del DOM usando LitElement. Las tareas se cargan desde un archivo externo en `assets/tasks.json`.

---

## Explicación técnica

### Reactividad

- Se usa `@property({ type: Array }) tasks` para declarar una propiedad reactiva.
- Al cambiar el estado de una tarea, se utiliza `this.tasks = [...this.tasks];` para **forzar el renderizado**, debido a que modificar objetos internos no activa automáticamente el re-render.

### render()

La función `render()` genera dinámicamente la lista de tareas con:

```js
<ul>
  ${this.tasks.map(task => html`
    <li class=${task.done ? 'checked' : ''}>
      <input type="checkbox" ?checked=${task.done} @change=${() => this.toggleTask(task)}>
      ${task.text}
    </li>
  `)}
</ul>
