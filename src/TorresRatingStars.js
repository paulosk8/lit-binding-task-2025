import { LitElement, html, css } from 'lit';

class TorresRatingStars extends LitElement {
  static styles = css`
    .stars {
      display: flex;
      gap: 10px;
      cursor: pointer;
    }
    .star {
      font-size: 2rem;
      color: lightgray;
      transition: color 0.3s;
    }
    .star.filled {
      color: gold;
    }
  `;

  static get properties() {
    return {
      rating: { type: Number }
    };
  }

  constructor() {
    super();
    this.rating = 0;
  }

  setRating(value) {
    this.rating = value;
  }

  render() {
    return html`
      <div class="stars">
        ${[1, 2, 3, 4, 5].map(
          i => html`
            <span
              class="star ${i <= this.rating ? 'filled' : ''}"
              @click=${() => this.setRating(i)}
              >★</span
            >
          `
        )}
      </div>
    `;
  }
}

customElements.define('rating-stars', TorresRatingStars);
