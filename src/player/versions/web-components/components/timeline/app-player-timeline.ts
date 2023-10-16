import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('app-player-timeline')
export class AppPlayerTimeline extends LitElement {
  static override styles = css`
    :host {
    }
  `;

  override render() {
    return html`<slot></slot>`;
  }

  private onClick() {
    //
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-player-timeline': AppPlayerTimeline;
  }
}

