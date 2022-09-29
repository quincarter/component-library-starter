import { html } from 'lit';
import '../out-tsc/index.js';

export default {
  title: 'New/TS Components',
  component: 'fancy-accordion',
  argTypes: {
    fancyAccordionTitle: { control: 'text' },
  },
};

function Template({ active, fancyAccordionTitle }) {
  return html`
    <fancy-accordion
      .fancyAccordionTitle="${fancyAccordionTitle}"
    ></fancy-accordion>
  `;
}

export const FancyAccordion = Template.bind({});
FancyAccordion.args = {
  fancyAccordionTitle: 'fancy-accordion works!',
};
