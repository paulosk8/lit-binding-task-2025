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
      <div class="container">
        ${Array.from({ length: this.totalSteps }, (_, i) =>
          html`<div class="step ${i === this.currentStep ? 'active' : ''}">${i + 1}</div>`
        )}
      </div>
    `;
  }
}

customElements.define('step-progress', StepProgress);
