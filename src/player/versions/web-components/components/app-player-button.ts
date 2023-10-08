export default class AppPlayerButton extends HTMLButtonElement {
  constructor() {
    super();

    const onClick = (event: Event) => {
      this.dispatchEvent(new CustomEvent('appclick', {
        detail: { domEvent: event },
        bubbles: true,
        composed: true,
      }));
    };

    this.addEventListener('click', onClick);
  }
}
