export default class AppComponentBase extends HTMLElement {
  constructor() {
    super();
  }

  public render() {
    const text = this.getAttribute('text') || '';
    this.innerHTML = text;
  }

  public connectedCallback() {
    this.render();
  }

  public disconnectedCallback() {
    // браузер вызывает этот метод при удалении элемента из документа
    // (может вызываться много раз, если элемент многократно добавляется/удаляется)
  }

  public static get observedAttributes() {
    return ['text'];
  }

  public attributeChangedCallback() {
    this.render();
  }
}
