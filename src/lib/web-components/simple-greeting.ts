import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('simple-greeting')
export class SimpleGreeting extends LitElement {
  // static styles = css`p { color: blue }`;

  @property()
  name = 'Somebody';

  @property()
  text = 'test text'

  render() {
    return html`<p>Hello! ${this.name} ${this.text}</p>`;
  }
}