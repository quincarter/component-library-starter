import { html } from 'lit';
import '../lib/index.js';

export default {
  title: 'New/Components',
  component: 'notification-banner',
  argTypes: {
    notificationBannerTitle: { control: 'text' },
  },
};

function Template({ active, notificationBannerTitle }) {
  return html`
    <notification-banner
      .notificationBannerTitle="${notificationBannerTitle}"
    ></notification-banner>
  `;
}

export const NotificationBanner = Template.bind({});
NotificationBanner.args = {
  notificationBannerTitle: 'notification-banner works!',
};
