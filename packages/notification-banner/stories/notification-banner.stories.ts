import { TemplateResult, html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { NotificationState } from '../core/notification-banner.core';
import '../lib/index.js';

export default {
  title: 'New/Components/NotificationBanner',
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

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  bannerDescription: string;
  bannerTitle: string;
  notificationState: NotificationState;
  useStorage: boolean;
  apiUrl: string;
}

const NotificationBannerTemplate: Story<ArgTypes> = ({
  bannerDescription,
  bannerTitle,
  notificationState,
  useStorage,
  apiUrl,
}) => html`
  <notification-banner
    banner-title="${bannerTitle}"
    banner-description="${bannerDescription}"
    notification-state="${ifDefined(notificationState)}"
    api-url="${apiUrl}"
    ?use-storage="${useStorage}"
  ></notification-banner>
`;

export const NotificationBanner = NotificationBannerTemplate.bind({});
NotificationBanner.args = {
  bannerTitle: 'notification-banner works!',
  bannerDescription: 'this description works',
  useStorage: true,
  apiUrl: 'https://quincarter.github.io/poc-repo/test.json',
};
