import { html } from 'lit';
import '../lib/index.js';
import '@quincarter/my-card-test';
import '@quincarter/my-header';

export default {
  title: 'New/Components',
  component: 'my-layout',
  argTypes: {
    myLayoutTitle: { control: 'text' },
  },
};

function Template({ active, myLayoutTitle }) {
  return html`
    <style>
      .mfe {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
    </style>
    <my-layout>
      <div slot="layout-header">
        <my-header>
          <div slot="header-start">Start slot</div>
          <div slot="header-middle">
            <input type="search" />
          </div>
          <div slot="header-end">user stuff</div>
        </my-header>
      </div>
      <div class="mfe">
        <my-card-test my-card-test-title="Yooooooo Title2">
          <p slot="card-slot">Test content in the card</p>
        </my-card-test>
        <my-card-test my-card-test-title="Yooooooo Title 3">
          <p slot="card-slot">Test content in the card2</p>
        </my-card-test>
        <my-card-test my-card-test-title="Yooooooo Title 4">
          <p slot="card-slot">Test content in the card4</p>
        </my-card-test>
      </div>
      <div slot="layout-gutter">Test content in the gutter</div>
      <div slot="layout-footer">
        <my-card-test>
          <p slot="card-slot">This card is in the footer</p>
        </my-card-test>
      </div>
    </my-layout>
  `;
}

export const MyLayout = Template.bind({});
MyLayout.args = {
  myLayoutTitle: 'my-layout works!',
};
