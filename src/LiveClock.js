import { LitElement, html, css } from 'lit';

export class LiveClock extends LitElement {
  static properties = {
    time: { type: String },
    format24h: { type: Boolean },
  };

  constructor() {
    super();
    this.time = this._getTime();
    this.format24h = true;
  }

  connectedCallback() {
    super.connectedCallback();
    this._interval = setInterval(() => {
      this.time = this._getTime();
    }, 1000);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    clearInterval(this._interval);
  }

  _getTime() {
    const date = new Date();
    return this.format24h
      ? date.toLocaleTimeString('es-EC', { hour12: false })
      : date.toLocaleTimeString('es-EC', { hour12: true });
  }

  _toggleFormat() {
    this.format24h = !this.format24h;
  }

  static styles = css`
    :host {
      display: block;
      text-align: center;
      font-family: monospace;
      margin-top: 30px;
    }
    button {
      margin-top: 10px;
      padding: 8px 20px;
      font-size: 1rem;
    }
  `;

  render() {
    return html`
      <h2>${this.time}</h2>
      <button @click=${this._toggleFormat}>
        Cambiar a ${this.format24h ? '12h' : '24h'}
      </button>
    `;
  }
}

customElements.define('live-clock', LiveClock);
