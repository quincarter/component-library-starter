import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import '../lib/index.js';

export default {
  title: 'New/Components',
  component: 'notification-banner',
  argTypes: {
    bannerTitle: { control: 'text', name: 'banner-title' },
    bannerDescription: { control: 'text', name: 'banner-description' },
    notificationState: {
      control: 'radio',
      name: 'notification-state',
      options: ['opened', 'closed'],
    },
    useStorage: {
      control: 'boolean',
      name: 'use-storage',
      default: false,
    },
    apiUrl: {
      control: 'text',
      name: 'api-url',
      default: '',
    },
  },
};

function Template({
  bannerDescription,
  bannerTitle,
  notificationState,
  useStorage,
  apiUrl,
}) {
  return html`
    <notification-banner
      banner-title="${bannerTitle}"
      banner-description="${bannerDescription}"
      notification-state="${ifDefined(notificationState)}"
      api-url="${apiUrl}"
      ?use-storage="${useStorage}"
    ></notification-banner>
  `;
}

export const NotificationBanner = Template.bind({});
NotificationBanner.args = {
  bannerTitle: 'notification-banner works!',
  bannerDescription: 'this description works',
  useStorage: true,
  apiUrl: 'https://quincarter.github.io/poc-repo/test.json',
};
