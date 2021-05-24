import styleContent from '../styles/content.scss';

const styleNode = document.createElement('style');
styleNode.textContent = styleContent;

export default class RichText extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  contentWrap?: HTMLDivElement;

  connectedCallback() {
    this.contentWrap = document.createElement('div');
    const content = this.getAttribute('content');
    if (content) {
      this.contentWrap.innerHTML = content!;
    }

    const style = this.getAttribute('style');
    if (style) {
      this.contentWrap.setAttribute('style', style);
    }

    this.shadowRoot!.appendChild(this.contentWrap);
    this.shadowRoot!.appendChild(styleNode);
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (!this.contentWrap) {
      return;
    }

    switch (name) {
      case 'content': {
        this.contentWrap.innerHTML = newValue!;
        return;
      }
      case 'style': {
        this.contentWrap.setAttribute('style', newValue);
        return;
      }
    }
  }

  static get observedAttributes() {
    return ['content', 'style'];
  }
}

if (!window.customElements.get('vize-rich-text')) {
  window.customElements.define('vize-rich-text', RichText);
} else {
  console.warn('[vize-richtext-render] Custom element "vize-rich-text" is already exists.');
}
