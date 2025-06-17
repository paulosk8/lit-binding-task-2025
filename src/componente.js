import { LitElement, html, css } from 'lit-element';

export class FontSizeAdjuster extends LitElement {
    fontSize = 16;

    static get properties() {
        return {
            fontSize: { type: Number }
        };
    }

    static styles = css`
    :host {
      display: block;
      font-family: Arial, sans-serif;
      padding: 20px;
      border: 1px solid #ddd;
      border-radius: 8px;
      max-width: 500px;
      margin: 20px auto;  
      text-align: center;
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    }

    .controls {
      margin-bottom: 25px;
    }

    label {
      font-size: 1.1em;
      color: #333;
    }

    input[type="range"] {
      width: 90%;
      margin-top: 15px;
      -webkit-appearance: none;
      appearance: none;
      height: 8px;
      border-radius: 5px;
      background: #d3d3d3;
      outline: none;
      opacity: 0.7;
      -webkit-transition: .2s;
      transition: opacity .2s;
    }

    input[type="range"]::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 25px;
      height: 25px;
      border-radius: 50%;
      background: #007bff;
      cursor: pointer;
      box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    }

    input[type="range"]::-moz-range-thumb {
      width: 25px;
      height: 25px;
      border-radius: 50%;
      background: #007bff;
      cursor: pointer;
      box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    }

    .text-container {
      margin-top: 25px;
      padding: 20px;
      border: 1px dashed #a0a0a0;
      background-color: #fefefe;
      min-height: 120px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      border-radius: 5px;
      box-shadow: inset 0 1px 3px rgba(0,0,0,0.1);
      transition: font-size 0.1s ease-out;
    }

    p {
      margin: 0;
      font-weight: bold;
      color: #555;
      line-height: 1.4;
    }
  `;

    render() {
        return html`
      <div class="controls">
        <label for="fontSlider">Tamaño de Fuente: <span>${this.fontSize}</span>px</label>
        <input
          id="fontSlider"
          type="range"
          min="10" max="60" .value="${this.fontSize}" @input=${this._handleSliderChange} />
      </div>

      <div class="text-container">
        <p style="font-size: ${this.fontSize}px;">
          Este es el texto cuyo tamaño cambiará con el slider.
          <br>
          ¡Ajusta el tamaño a tu gusto!
        </p>
      </div>
    `;
    }

    _handleSliderChange(event) {
        this.fontSize = Number(event.target.value);
    }
}

window.customElements.define('font-size-adjuster', FontSizeAdjuster);