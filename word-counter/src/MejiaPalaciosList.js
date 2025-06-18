import { LitElement, html, css } from 'lit';

export class WordCounter extends LitElement {
  static styles = css`
    textarea {
      max-width: 100%;
      width: 100%;
      height: 150px;
      max-height: 100vh;
      box-sizing: border-box;
      resize: none;
      overflow-y: auto;
    }
    p {
      margin-top: 0.5rem;
      font-weight: bold;
    }
  `;

  static get properties() {
    return {
      text: { type: String }
    };
  }

  constructor() {
    super();
    this.text = '';
  }

  get wordCount() {
    return this.text.trim() === '' ? 0 : this.text.trim().split(/\s+/).length;
  }

  render() {
    return html`
      <textarea @input=${this._handleInput} .value=${this.text}></textarea>
      <p>Palabras: ${this.wordCount}</p>
    `;
  }

  _handleInput(e) {
    this.text = e.target.value;
  }
}

customElements.define('word-counter', WordCounter);
