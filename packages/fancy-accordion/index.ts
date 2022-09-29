import { FancyAccordionComponent } from './src/fancy-accordion.js';

if (!customElements.get('fancy-accordion')) {
  customElements.define('fancy-accordion', FancyAccordionComponent);
}
