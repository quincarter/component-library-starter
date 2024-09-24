import {
  CSSResultOrNative,
  HTMLTemplateResult,
  LitElement,
  PropertyValueMap,
  html,
  nothing,
} from 'lit';
import { property } from 'lit/decorators.js';
import {
  IBottomMobileNavComponent,
  NavItem,
} from '../core/BottomMobileNav.interface';
import { BottomMobileNavComponentStyles } from '../core/bottom-mobile-nav.styles';
import { classMap } from 'lit/directives/class-map.js';

/**
 * This is a short description of your component. Change me in [./src/bottom-mobile-nav.ts](./src/bottom-mobile-nav.ts#L6-42) in the JSDoc above the Component Class.
 *
 * * Updating these docs in the ts file will generate a new README.md file at the package root in the pre-commit hook.
 * * Properties and other items added in JSDoc will be appended below the final line of this JSDoc based on your component Composition.
 * * For more information about what is supported in README generation, [click here](https://github.com/runem/web-component-analyzer)
 *
 * ## Installation
 *
 * ```bash
 * npm i -s @quincarter/bottom-mobile-nav
 * ```
 *
 * or with `yarn`
 *
 * ```bash
 *
 * yarn add @quincarter/bottom-mobile-nav
 *
 * ```
 *
 *
 * # Web Component
 * * Use this method if you need to use bottom-mobile-nav in its entirety
 *
 * ## Imports
 * * if you just need the web component as-is
 *
 * ```javascript
 *
 * import '@quincarter/bottom-mobile-nav';
 *
 * ```
 *
 * * If you need to rename the element for some reason, you can do this:
 *
 * ```javascript
 *
 *
 * import { BottomMobileNav } from '@quincarter/bottom-mobile-nav/BottomMobileNav';
 *
 * // then define the component yourself with a custom tag name
 * customElements.define('foo-my-tag-here-bar', BottomMobileNav);
 *
 *
 * ```
 *
 * ## WC Usage Example
 *
 * ```html
 *
 * <bottom-mobile-nav my-bottom-mobile-nav-title="testing this attribute works">
 * </bottom-mobile-nav>
 *
 * ```
 *
 * # Core
 * * Use this method if you need to use pieces of bottom-mobile-nav, but you don't need the entire web component.
 * ## Imports
 *
 * ```typescript
 *
 * import { IBottomMobileNavComponent,  BottomMobileNavComponentStyles } from '@quincarter/bottom-mobile-nav/CoreBottomMobileNavComponent';
 *
 * ```
 *
 * ## Core Usage Example
 *
 * ### Core Interface
 *
 * ```typescript
 *
 * import { LitElement } from 'lit';
 * import { IBottomMobileNavComponent } from '@quincarter/bottom-mobile-nav/CoreBottomMobileNavComponent';
 *
 * export class FooBar extends LitElement implements IBottomMobileNavComponent {
 * // TODO: Implement Interface definition
 * }
 *
 * ```
 *
 * ### Core Styles
 *
 * ```typescript
 *
 * import { LitElement } from 'lit';
 * import { BottomMobileNavComponentStyles } from '@quincarter/bottom-mobile-nav/CoreBottomMobileNavComponent';
 *
 * export class BarFoo extends LitElement {
 *     static get styles(): CSSResult[] {
 *         return [
 *             BottomMobileNavComponentStyles,
 *             css`/* my css here /*`
 *         ];
 *     }
 * }
 *
 * ```
 *
 *
 * @element bottom-mobile-nav
 *
 *
 */
export class BottomMobileNavComponent
  extends LitElement
  implements IBottomMobileNavComponent
{
  /**
   * List Of navItems for the nav bar to create
   * @attr nav-items
   * @default []
   */
  @property({ type: Array, attribute: 'nav-items' })
  navItems: NavItem[] = [];

  static get styles(): CSSResultOrNative[] {
    return [BottomMobileNavComponentStyles];
  }

  constructor() {
    super();
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/icon?family=Material+Icons';
    this.shadowRoot?.appendChild(link);
  }

  protected firstUpdated(
    _changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>,
  ): void {
    super.firstUpdated(_changedProperties);
  }

  protected updated(
    _changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>,
  ): void {}

  render(): HTMLTemplateResult {
    return html`
      ${this.navItems.length > 0
        ? html`<nav class="bottom-nav">
            ${this.navItems.map(
              (navItem: NavItem) => html`
                <a
                  href="${navItem.path}"
                  class="bottom-nav-item ${classMap({
                    active: window.location.pathname.includes(navItem.path),
                  })}"
                >
                  <div class="bottom-nav-link">
                    <i class="material-icons">${navItem.icon || ''}</i>
                    <span>${navItem.name}</span>
                  </div>
                </a>
              `,
            )}
          </nav>`
        : nothing}
    `;
  }
}
