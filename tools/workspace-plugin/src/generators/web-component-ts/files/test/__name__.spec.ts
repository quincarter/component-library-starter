import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import { <%=className%><%=componentTypeClass%> } from '../src/<%=fileName%>'
import '../index.js';

describe('<%=className%><%=componentTypeClass%>', () => {
  let element: <%=className%><%=componentTypeClass%>;
  beforeEach(async () => {
    element = await fixture(html`<<%=fileName%>></<%=fileName%>>`);
  });

  <% if (componentType == "card") { %>
    it('renders a card', () => {
      const card = element?.shadowRoot?.querySelector('.card');
      expect(card).to.exist;
    });
  <% } %>

  <% if (componentType == "button") { %>
    it('renders a button', () => {
      const card = element?.shadowRoot?.querySelector('.button');
      expect(card).to.exist;
    });
  <% } %>

  <% if (componentType == "component") { %>
    it('renders an h1', () => {
      const h1 = element?.shadowRoot?.querySelector('h1');
      expect(h1).to.exist;
      expect(h1?.textContent).to.contain('<%=fileName%>');
    });
  <% } %>

  it('passes the a11y audit', async () => {
    await expect(element)?.shadowDom?.to.be.accessible();
  });
});
