import { LitElement, html, css } from 'lit-element';

class ShoppingCartPreview extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        font-family: sans-serif;
        border: 2px solid #ccc;
        padding: 1rem;
        max-width: 400px;
        border-radius: 10px;
      }

      input, button {
        margin-top: 0.5rem;
        padding: 0.4rem;
        font-size: 1rem;
        display: block;
      }

      ul {
        list-style: none;
        padding: 0;
      }

      li {
        margin-bottom: 0.5rem;
      }

      .total {
        margin-top: 1rem;
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
      <h2>Shopping Cart Preview</h2>

      <input
        type="text"
        placeholder="Product name"
        .value="${this.productName}"
        @input="${e => this.productName = e.target.value}"
      />
      <input
        type="number"
        placeholder="Product price"
        .value="${String(this.productPrice)}"
        @input="${e => this.productPrice = parseFloat(e.target.value)}"
      />
      <button @click="${this.addProduct}">Add Product</button>

      <ul>
        ${this.cart.map(item => html`
          <li>${item.name} - $${item.price.toFixed(2)}</li>
        `)}
      </ul>

      <div class="total">
        Total: $${total}
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