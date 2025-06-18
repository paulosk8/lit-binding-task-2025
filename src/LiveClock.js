import { LitElement, html, css } from 'lit';

export class LiveClock extends LitElement {
  static properties = {
    time: { type: String },
    format24h: { type: Boolean },
  };

  constructor() {
    super();
    this.format24h = true;
    this._updateTime();
  }

  connectedCallback() {
    super.connectedCallback();
    this._interval = setInterval(() => this._updateTime(), 1000);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    clearInterval(this._interval);
  }

  _updateTime() {
    const date = new Date();
    this.time = date.toLocaleTimeString('es-EC', {
      hour12: !this.format24h,
    });
  }

  _toggleFormat() {
    this.format24h = !this.format24h;
    this._updateTime();
  }

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-family: 'Courier New', monospace;
      background: #f0f4f8;
      height: 100vh;
      margin: 0;
    }

    h2 {
      font-size: 3rem;
      margin-bottom: 20px;
      letter-spacing: 3px;
      color: #2c3e50;
      text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
    }

    button {
      font-size: 1rem;
      padding: 10px 20px;
      background-color: #3498db;
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition: background-color 0.3s ease, transform 0.2s ease;
    }

    button:hover {
      background-color: #2980b9;
      transform: scale(1.05);
    }

    button:focus {
      outline: none;
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
