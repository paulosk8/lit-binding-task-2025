import { LitElement, html, css } from 'lit-element';

class GalarzaPanel extends LitElement {
    constructor() {
        super();
        this.celsius = 0;
        this.farenheit = 32;
    }

    static get properties() {
        return {
            celsius: { type: Number },
            farenheit: { type: Number },
        }
    }

    static get styles(){
        return css`
            .panel {
                display: flex;
                flex-direction: column;
                padding: 20px;
                gap: 15px;
                max-width: 400px;
                border: 1px solid #e0e0e0;
                border-radius: 10px;
            }
            h2 {
                color: #333;
                text-align: center;
                margin: 0;
            }
            .temperatura {
                font-size: 25px;
                text-align: center;
            }
            .container {
                display: flex;
                gap: 10px;
            }
            .card {
                text-align: center;
                padding: 15px;
                background-color: #f9f9f9;
                border-radius: 5px;
                border: 1px solid #e0e0e0;
            }
            .formula {
                font-size: 14px;
                color: #666;
                background-color: #f5f5f5;
                padding: 10px;
                border-radius: 5px;
                text-align: center;
            }
            input {
                width: 85%;
                padding: 8px;
                border: 1px solid #ddd;
                border-radius: 4px;
                text-align: center;
            }
        `;
    }

    render() {
        return html`
      <div class="panel">
        <h2>Conversor de Temperatura</h2>
        <div class="temperatura">${this.celsius}°C = ${this.farenheit}°F</div>
        <div class="container">
          <div class="card">
            <b>Grado Celsius</b>
            <input @input="${this.actualizarCelsius}" type="number" .value=${String(this.celsius)}>
          </div>
          <div class="card">
            <b>Grado Farenheit</b>
            <input @input="${this.actualizarFarenheit}" type="number" .value=${String(this.farenheit)}>
          </div>
        </div>
        <div class="formula">
          Formula (${this.celsius}°C × 9/5) + 32 = ${this.farenheit}°F
        </div>
      </div>
    `;
    }

    actualizarCelsius(e) {
        this.celsius = e.target.value;
        this.farenheit = (this.celsius * 9 / 5 + 32).toFixed(2);
    }

    actualizarFarenheit(e) {
        this.farenheit = e.target.value;
        this.celsius = ((this.farenheit - 32) * 5 / 9).toFixed(2);
    }
}

customElements.define('galarza-panel', GalarzaPanel);