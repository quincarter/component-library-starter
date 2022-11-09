import { LitElement, html, HTMLTemplateResult, CSSResult } from 'lit';
import { property, state } from 'lit/decorators.js';
import { NotificationBannerComponentStyles } from '../core/notification-banner.styles';
import {
  INotificationBannerComponent,
  TestJson,
  NotificationState,
} from '../core/NotificationBanner.interface';

const SESSION_STORAGE_STATE_KEY = 'notification-dismissed';
const SESSION_STORAGE_CONTENT_KEY = 'notification-content';
/**
 * This is a short description of your component. Change me in [./src/notification-banner.ts](./src/notification-banner.ts#L6-42) in the JSDoc above the Component Class.
 *
 * * Updating these docs in the ts file will generate a new README.md file at the package root in the pre-commit hook.
 * * Properties and other items added in JSDoc will be appended below the final line of this JSDoc based on your component Composition.
 * * For more information about what is supported in README generation, [click here](https://github.com/runem/web-component-analyzer)
 *
 * ## Installation
 * ```bash
 * npm i -s @quincarter/notification-banner
 * ```
 * or with `yarn`
 * ```bash
 * yarn add @quincarter/notification-banner
 * ```
 *
 * # Web Component
 * * Use this method if you need to use notification-banner in its entirety
 * ## Imports
 * * if you just need the web component as-is
 * ```javascript
 * import '@quincarter/notification-banner';
 * ```
 * * If you need to rename the element for some reason, you can do this:
 * ```javascript
 *
 * import { NotificationBanner } from '@quincarter/notification-banner/NotificationBanner';
 *
 * // then define the component yourself with a custom tag name
 * customElements.define('foo-my-tag-here-bar', NotificationBanner);
 *
 * ```
 *
 * ## WC Usage Example
 * ```html
 * <notification-banner my-notification-banner-title="testing this attribute works">
 * </notification-banner>
 * ```
 *
 * # Core
 * * Use this method if you need to use pieces of notification-banner, but you don't need the entire web component.
 * ## Imports
 * ```typescript
 * import { INotificationBannerComponent,  NotificationBannerComponentStyles } from '@quincarter/notification-banner/CoreNotificationBannerComponent';
 * ```
 *
 * ## Core Usage Example
 * ### Core Interface
 * ```typescript
 * import { LitElement } from 'lit';
 * import { INotificationBannerComponent } from '@quincarter/notification-banner/CoreNotificationBannerComponent';
 *
 * export class FooBar extends LitElement implements INotificationBannerComponent {
 * // TODO: Implement Interface definition
 * }
 * ```
 *
 * ### Core Styles
 * ```typescript
 * import { LitElement } from 'lit';
 * import { NotificationBannerComponentStyles } from '@quincarter/notification-banner/CoreNotificationBannerComponent';
 *
 * export class BarFoo extends LitElement {
 *     static get styles(): CSSResult[] {
 *         return [
 *             NotificationBannerComponentStyles,
 *             css`/* my css here /*`
 *         ];
 *     }
 * }
 * ```
 *
 *
 * @element notification-banner
 *
 *
 */
export class NotificationBannerComponent
  extends LitElement
  implements INotificationBannerComponent
{
  /**
   * Description of the alert message
   * @attr banner-description
   * @default undefined
   */
  @property({ type: String, attribute: 'banner-description' })
  bannerDescription: string | undefined;

  /**
   * Determines the title value of the component
   * @attr banner-title
   * @default undefined
   */
  @property({ type: String, attribute: 'banner-title' })
  bannerTitle: string | undefined;

  @state()
  notificationState: string | null | undefined;

  static get styles(): CSSResult[] {
    return [NotificationBannerComponentStyles];
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.getSessionStorageData();
    this.getBannerDetails();
  }

  async getSessionStorageData() {
    if (!sessionStorage.getItem(SESSION_STORAGE_STATE_KEY)) {
      this.setSessionStorageData('opened');
    }

    this.notificationState = sessionStorage.getItem(SESSION_STORAGE_STATE_KEY);
    this.requestUpdate();
    await this.updateComplete;
    console.log('dismissed', this.notificationState);
  }

  setSessionStorageData(value: NotificationState) {
    sessionStorage.setItem(SESSION_STORAGE_STATE_KEY, value);
  }

  async getBannerDetails(): Promise<void> {
    const content = await fetch(
      'https://quincarter.github.io/poc-repo/test.json'
    );

    const existingContent = sessionStorage.getItem(SESSION_STORAGE_CONTENT_KEY);

    if (content) {
      const alert: TestJson = await content.json();

      if (JSON.stringify(alert) !== existingContent) {
        console.log('setting session storage');
        sessionStorage.setItem(
          SESSION_STORAGE_CONTENT_KEY,
          JSON.stringify(alert)
        );
        sessionStorage.setItem(SESSION_STORAGE_STATE_KEY, 'opened');
      }
      this.bannerTitle = alert.name;
      this.bannerDescription = alert.content;
    }
  }

  dismissNotification(e: MouseEvent): void {
    this.setSessionStorageData('closed');
    this.setNotificationState();
  }
  async setNotificationState() {
    this.notificationState = sessionStorage.getItem(SESSION_STORAGE_STATE_KEY);
    this.requestUpdate();
    await this.updateComplete;
  }

  render(): HTMLTemplateResult {
    return html`
      ${this.notificationState === 'opened'
        ? html`<div class="banner">
            <i class="close" @click="${this.dismissNotification}"></i>
            <p class="title">${this.bannerTitle}</p>
            <p class="description">${this.bannerDescription}</p>
          </div>`
        : html``}
    `;
  }
}
