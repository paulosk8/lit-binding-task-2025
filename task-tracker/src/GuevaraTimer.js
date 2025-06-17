import { LitElement, html, css, unsafeCSS} from 'lit';
// import { property } from 'lit/decorators.js';
import style from '../styles/style-tasks.css';

class TaskTracker extends LitElement {
  // @property({ type: Array })
  // tasks; 
  static styles = css`${unsafeCSS(style)}`;
  constructor() {
    super();
    this.tasks = [];
  }

  connectedCallback() {
    super.connectedCallback();
    fetch('/assets/tasks.json')
      .then(response => response.json())
      .then(data => {
        this.tasks = data;
        this.requestUpdate();
      });
  }

  render() {
    return html`
      <h2>Lista de tareas</h2>
      <ul>
        ${this.tasks.map(
          task => html`
            <li class=${task.done ? 'checked' : ''}>
              <input
                type="checkbox"
                ?checked=${task.done}
                @change=${() => this.toggleTask(task)}
              />
              ${task.text}
            </li>
          `
        )}
      </ul>
    `;
  }

  toggleTask(task) {
    task.done = !task.done;
    this.tasks = [...this.tasks];
  }
}

customElements.define('task-tracker', TaskTracker);
