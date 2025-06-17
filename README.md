# TaskTracker - Componente Web con LitElement

### Autor: Jordan Alexander Guevara Chalial  
### Fecha: 2025-06-17
### Docente: Ing. Paulo Galarza Mgs.
### Periodo: 2025-1

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
### Captura del Componente
![Imagen del Componente](/img/MuestraWebComponent.png)
# Pasos para la instalación de dependencia para el funcionamiento del WebComponent.
Seguimos los pasos para la clonación del repositorio
```bash
git clone https://github.com/JordanGuevara/lit-binding-task-2025.git
cd lit-binding-task-2025
```
Dentro del proyecto instalamos lo que son las siguientes dependecias de las cuales tienen las siguientes funciones:
- Instala LitElement, la librería base para crear Web Components modernos con renderizado reactivo.
```bash
npm install lit-element
```
- Instala Webpack y su interfaz de línea de comandos para compilar y agrupar tus archivos JS, CSS, etc.
```bash
npm install webpack webpack-cli --save-dev
```
- Instala el servidor local de desarrollo de Webpack, útil para hacer pruebas con recarga automática (npm run serve).
```bash
npm install webpack webpack-dev-server --save-dev
```
- Plugin que genera un archivo index.html con tu bundle JS incluido automáticamente.
```bash
npm install --save-dev html-webpack-plugin
```
- Permite que Webpack entienda y transforme código moderno (ES6+) y decoradores/clases de Lit (No aplicable por conflictos de configuración).
```bash
npm install --save-dev babel-loader @babel/core @babel/preset-env @babel/plugin-proposal-decorators @babel/plugin-proposal-class-properties
```
- Permite importar archivos .css directamente al componente:css-loader: interpreta @import y url() en CSS y to-string-loader: convierte el CSS en un string para que puedas inyectarlo en el shadow DOM usando unsafeCSS.
```bash
npm install --save-dev to-string-loader css-loader
```
- Para iniciar el proyecto en si
```bash
npm run serve
```
