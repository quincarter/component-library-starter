import { NotificationBannerComponent } from './src/notification-banner.js';

customElements.get('notification-banner') ||
  customElements.define('notification-banner', NotificationBannerComponent);
