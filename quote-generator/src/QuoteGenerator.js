import { LitElement, html, css } from 'lit-element';

export class QuoteGenerator extends LitElement {
  static styles = css`
    :host {
      display: block;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      padding: 2rem;
      background: linear-gradient(135deg, #0072ff, #00c6ff);
      border-radius: 15px;
      max-width: 450px;
      margin: 2rem auto;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
      color: #fff;
      text-align: center;
      user-select: none;
    }
    p {
      font-size: 1.25rem;
      font-weight: 600;
      line-height: 1.5;
      margin-bottom: 1.5rem;
      min-height: 80px;
      transition: opacity 0.3s ease-in-out;
    }
    button {
      padding: 0.75rem 2rem;
      background-color: #004aad;
      color: white;
      font-weight: 700;
      font-size: 1rem;
      border: none;
      border-radius: 30px;
      cursor: pointer;
      box-shadow: 0 5px 15px rgba(0, 74, 173, 0.6);
      transition: background-color 0.3s ease;
    }
    button:hover {
      background-color: #002f6c;
    }
  `;

  static properties = {
    quote: { type: String },
  };

  constructor() {
    super();
    this.quotes = [
      "Siempre un paso adelante.",
      "Si crees en ti mismo ya has ganado.",
      "Confía en el proceso y te darás cuenta de que todo es posible.",
      "Cada día es una nueva oportunidad para aprender.",
      "Las mejores lecciones se obtienen luego de una batalla.",
      "Que los errores no sean más fuertes que tus ganas de seguir.",
      "La excelencia no es un acto, sino un hábito.",
      "Sé constante y lucha por el éxito.",
      "El conocimiento es tu mejor aliado.",
      "El futuro pertenece a quienes creen en la belleza de sus sueños",
    ];
    this.quote = this.getRandomQuote();
  }

  getRandomQuote() {
    const index = Math.floor(Math.random() * this.quotes.length);
    return this.quotes[index];
  }

  updateQuote() {
    this.quote = this.getRandomQuote();
  }

  render() {
    return html`
      <p>${this.quote}</p>
      <button @click="${this.updateQuote}">Nueva frase</button>
    `;
  }
}

customElements.define("quote-generator", QuoteGenerator);
