import { LitElement, html, css } from 'lit-element';

class ShoppingCartPreview extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        font-family: 'Segoe UI', sans-serif;
        max-width: 1000px;
        margin: 0 auto;
        border: 1px solid #ddd;
        padding: 1rem;
        border-radius: 10px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      }

      h2 {
        text-align: center;
      }

      .container {
        display: flex;
        gap: 4rem;
      }

      .form-section, .summary-section {
        flex: 1;
      }

      .form-group {
        display: flex;
        flex-direction: column;
        margin-bottom: 1rem;
      }

      label {
        margin-bottom: 0.3rem;
        font-weight: bold;
      }

      input {
        padding: 0.5rem;
        font-size: 1rem;
        border: 1px solid #ccc;
        border-radius: 5px;
      }

      button {
        padding: 0.6rem;
        font-size: 1rem;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s;
      }

      button:hover {
        background-color: #0056b3;
      }

      table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 0.5rem;
      }

      th, td {
        border: 1px solid #ccc;
        padding: 0.6rem;
        text-align: left;
      }

      th {
        background-color: #f4f4f4;
      }

      .total {
        margin-top: 1rem;
        text-align: right;
        font-size: 1.2rem;
        font-weight: bold;
      }
    `;
  }

  static get properties() {
    return {
      productName: { type: String },
      productPrice: { type: Number },
      cart: { type: Array }
    };
  }

  constructor() {
    super();
    this.productName = '';
    this.productPrice = 0;
    this.cart = [];
  }

  render() {
    const total = this.cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);

    return html`
      <h2>🛒 Carrito de compras 🛒</h2>
      <hr>
      <div class="container">
        <!-- Formulario -->
        <div class="form-section">
          <div class="form-group">
            <label for="productName">Producto 🥸:</label>
            <input
              id="productName"
              type="text"
              placeholder="Ejemplo: Laptop"
              .value="${this.productName}"
              @input="${e => this.productName = e.target.value}"
            />
          </div>
          <div class="form-group">
            <label for="productPrice">Precio($🤑)</label>
            <input
              id="productPrice"
              type="number"
              step="0.01"
              placeholder="Ej. 1500"
              .value="${String(this.productPrice)}"
              @input="${e => this.productPrice = parseFloat(e.target.value)}"
            />
          </div>
          <button @click="${this.addProduct}">Agregar al carrito</button>
        </div>

        <!-- Tabla resumen -->
        <div class="summary-section">
          <table>
            <thead>
              <tr>
                <th>Producto</th>
                <th>Precio ($)</th>
              </tr>
            </thead>
            <tbody>
              ${this.cart.map(item => html`
                <tr>
                  <td>${item.name}</td>
                  <td>${item.price.toFixed(2)}</td>
                </tr>
              `)}
            </tbody>
          </table>
          <div class="total">
            Total: $${total}
          </div>
        </div>
      </div>
    `;
  }

  addProduct() {
    if (this.productName && !isNaN(this.productPrice)) {
      this.cart = [
        ...this.cart,
        { name: this.productName, price: this.productPrice }
      ];
      this.productName = '';
      this.productPrice = 0;
    }
  }
}

customElements.define('shopping-cart-preview', ShoppingCartPreview);
