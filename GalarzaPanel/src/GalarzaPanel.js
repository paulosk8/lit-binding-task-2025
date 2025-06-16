import { LitElement, html, css } from 'lit-element';

class GalarzaPanel extends LitElement {
  constructor() {
    super();
    this.celsius = 0;
    this.farenheit = 32;
  }
  static get properties(){
    return {
        celsius: { type: Number },
        fahrenheit: { type: Number },
    }
  }
  static styles = css`
    .panel {
      padding: 1rem;
      max-width: 300px;
      margin: auto;
      border: 1px solid #ccc;
      border-radius: 8px;
      font-family: Arial, sans-serif;
    }

    label {
      display: block;
      margin-top: 1rem;
    }

    input {
      width: 100%;
      padding: 0.5rem;
      margin-top: 0.25rem;
      box-sizing: border-box;
    }
  `;
  render() {
    return html`
        <div class="panel">
            <h2>Conversor de Temperatura</h2>
            <label>Celsius: <input @input="${this.actualizarCelsius}" type="number" .value=${String(this.celsius)}></label>
            <label>Farenheit: <input type="number" .value=${String(this.farenheit)} @input=${this.actualizarFarenheit}></label>
        </div>
    `;
  }
  actualizarCelsius(e) {
    this.celsius = e.target.value;
    this.farenheit = this.celsius * 9 / 5 + 32;
  }
  actualizarFarenheit(e) {
    this.farenheit = e.target.value;
    this.celsius = (this.farenheit - 32) * 5 / 9;
  }
}

customElements.define('galarza-panel', GalarzaPanel);
