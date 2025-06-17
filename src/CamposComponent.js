import { LitElement, html, css } from 'lit';

class CamposComponent extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 1rem;
      background: #f0f0f0;
      border: 1px solid #ccc;
      border-radius: 8px;
      max-width: 400px;
      margin: auto;
      font-family: sans-serif;
    }
    h2 {
      text-align: center;
      color: #333;
    }
    label {
      display: block;
      margin-top: 1rem;
      font-weight: bold;
    }
    input {
      width: 100%;
      padding: 0.4rem;
      border-radius: 4px;
      border: 1px solid #ccc;
    }
    .output, .saved-message {
      margin-top: 1.5rem;
      background: #fff;
      padding: 1rem;
      border: 1px solid #ddd;
      border-radius: 4px;
    }
    button {
      margin-top: 1rem;
      width: 100%;
      padding: 0.5rem;
      background-color: #4CAF50;
      color: white;
      border: none;
      border-radius: 4px;
      font-size: 16px;
      cursor: pointer;
    }
    .success {
      background: #d4edda;
      color: #155724;
      border: 1px solid #c3e6cb;
    }
  `;

  static properties = {
    name: { type: String },
    email: { type: String },
    age: { type: Number },
    saved: { type: Boolean },
    savedName: { type: String },
    savedEmail: { type: String },
    savedAge: { type: Number },
  };

  constructor() {
    super();
    this.name = 'Anderson Campos';
    this.email = 'anderson@email.com';
    this.age = 25;
    this.saved = false;
    this.savedName = '';
    this.savedEmail = '';
    this.savedAge = null;
  }

  guardarPerfil() {
    this.savedName = this.name;
    this.savedEmail = this.email;
    this.savedAge = this.age;
    this.saved = true;

    setTimeout(() => {
      this.saved = false;
    }, 5000); // mensaje visible por 5 segundos
  }

  render() {
    return html`
      <h2>Editor de Perfil</h2>

      <label>Nombre:
        <input type="text" .value=${this.name} @input=${e => this.name = e.target.value}>
      </label>
      <label>Email:
        <input type="email" .value=${this.email} @input=${e => this.email = e.target.value}>
      </label>
      <label>Edad:
        <input type="number" .value=${this.age} @input=${e => this.age = parseInt(e.target.value)}>
      </label>

      <button @click=${this.guardarPerfil}>Guardar</button>

      <div class="output">
        <p>Nombre: <strong>${this.name}</strong>.</p>
        <p>Correo: <em>${this.email}</em></p>
        <p>Edad: <strong>${this.age}</strong> años</p>
      </div>

      ${this.saved ? html`
        <div class="saved-message success">
          <p> ¡Perfil guardado correctamente!</p>
          <p> Datos guardados:</p>
          <ul>
            <li><strong>Nombre:</strong> ${this.savedName}</li>
            <li><strong>Email:</strong> ${this.savedEmail}</li>
            <li><strong>Edad:</strong> ${this.savedAge} años</li>
          </ul>
        </div>
      ` : ''}
    `;
  }
}

customElements.define('user-profile-editor', CamposComponent);
