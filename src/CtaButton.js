import { html, css, LitElement } from 'lit';
import '@lrnwebcomponents/simple-icon/lib/simple-icon-lite.js';
import '@lrnwebcomponents/simple-icon/lib/simple-icons.js';

export class CtaButton extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--cta-button-text-color, #000);
      }

      a {
        box-shadow: inset 0px 1px 0px 0px #ffffff;
        background-color: transparent;
        border-radius: 6px;
        border: 1px solid #dcdcdc;
        display: inline-block;
        cursor: pointer;
        color: #666666;
        font-family: Arial;
        font-size: 15px;
        font-weight: bold;
        padding: 6px 24px;
        text-decoration: none;
        text-shadow: 0px 1px 0px #ffffff;
      }
      a:hover {
        background-color: transparent;
      }
      a:active {
        position: relative;
        top: 1px;
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      link: { type: String },
      icon: { type: String },
      disabled: { type: Boolean, reflect: true },
    };
  }

  constructor() {
    super();
    this.title = 'Hey there';
    this.link =
      'https://www.greygoose.com/products.html?utm_source=google&utm_medium=paidsearch&utm_c[…]jfRq-mCM4HhCqWQQelgq6Ws7HM9PC8Y7AzTYmTVj0hwT3KRoCV1oQAvD_BwE';
    this.icon = 'save';
    this.disabled = false;
  }

  render() {
    return html`
      <a href="${this.link}" tabindex="-1"
        ><button ?disabled="${this.disabled}">
          <simple-icon-lite icon="${this.icon}"></simple-icon-lite>
          ${this.title}
          <slot></slot>
        </button>
      </a>
    `;
  }
}
