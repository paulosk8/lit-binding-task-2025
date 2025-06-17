import { LitElement, html, css } from 'lit';

export class MejiaInput extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
      font-family: sans-serif;
    }
    input[type="color"] {
      padding: 0;
      border: none;
      width: 48px;
      height: 48px;
      cursor: pointer;
    }
    .preview {
      display: inline-block;
      width: 48px;
      height: 48px;
      margin-left: 16px;
      border: 1px solid #ccc;
      border-radius: 8px;
      vertical-align: middle;
      background-color: var(--preview-color, red);
      transition: background-color 0.3s ease;
    }
    .color-text {
      display: inline-block;
      margin-left: 12px;
      vertical-align: middle;
      font-weight: bold;
      font-size: 1rem;
    }
  `;

  // @property({ type: String }) // ← Esto causaba conflictos por shadowing
  
  static get properties() {
    return {
      selectedColor: { type: String }
    };
  }

  constructor() {
    super();
    this.selectedColor = '#ff0000'; 
  }

  render() {
    return html`
      <input
        type="color"
        .value=${this.selectedColor}
        @input=${this._onColorChange}
      />
      <span
        class="preview"
        style="background-color: ${this.selectedColor};"
        title="Vista previa del color seleccionado"
      ></span>
      <span class="color-text">${this.selectedColor}</span>
    `;
  }

  _onColorChange(event) {
    this.selectedColor = event.target.value;
  }
}

customElements.define('mejia-input', MejiaInput);
