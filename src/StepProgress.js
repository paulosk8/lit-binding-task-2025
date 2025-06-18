import { LitElement, html, css } from 'lit';

class StepProgress extends LitElement {
  static properties = {
    current: { type: Number },
    total: { type: Number }
  };

  constructor() {
    super();
    this.current = 1;
    this.total = 5;
  }

  static styles = css`
    .progress {
      display: flex;
      gap: 8px;
    }
    .step {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: lightgray;
    }
    .step.active {
      background-color: green;
    }
  `;

  render() {
    return html`
      <div class="progress">
        ${Array.from({ length: this.total }, (_, i) => html`
          <div class="step ${i < this.current ? 'active' : ''}"></div>
        `)}
      </div>
    `;
  }
}

customElements.define('step-progress', StepProgress);
