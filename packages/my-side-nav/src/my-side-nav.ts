import {
  LitElement,
  html,
  HTMLTemplateResult,
  CSSResult,
  css,
  PropertyValueMap,
} from 'lit';
import { property } from 'lit/decorators.js';
import { MySideNavComponentStyles } from '../core/my-side-nav.styles';
import { FontAwesome } from '../core/icons/icons.styles';
import { IMySideNavComponent, NavLinks } from '../core/MySideNav.interface';

/**
 * This is a short description of your component. Change me in [./src/my-side-nav.ts](./src/my-side-nav.ts#L6-42) in the JSDoc above the Component Class.
 *
 * * Updating these docs in the ts file will generate a new README.md file at the package root in the pre-commit hook.
 * * Properties and other items added in JSDoc will be appended below the final line of this JSDoc based on your component Composition.
 * * For more information about what is supported in README generation, [click here](https://github.com/runem/web-component-analyzer)
 *
 * ## Installation
 * ```bash
 * npm i -s @quincarter/my-side-nav
 * ```
 * or with `yarn`
 * ```bash
 * yarn add @quincarter/my-side-nav
 * ```
 *
 * # Web Component
 * * Use this method if you need to use my-side-nav in its entirety
 * ## Imports
 * * if you just need the web component as-is
 * ```javascript
 * import '@quincarter/my-side-nav';
 * ```
 * * If you need to rename the element for some reason, you can do this:
 * ```javascript
 *
 * import { MySideNav } from '@quincarter/my-side-nav/MySideNav';
 *
 * // then define the component yourself with a custom tag name
 * customElements.define('foo-my-tag-here-bar', MySideNav);
 *
 * ```
 *
 * ## WC Usage Example
 * ```html
 * <my-side-nav .navLinks="[{name: 'Some Name', link: 'someLink/path/to/page', logo: 'fa-dashboard'}]">
 *   <div>Put your content here - this is a default slot that will render the content on the page for you</div>
 * </my-side-nav>
 * ```
 *
 * # Core
 * * Use this method if you need to use pieces of my-side-nav, but you don't need the entire web component.
 * ## Imports
 * ```typescript
 * import { IMySideNavComponent,  MySideNavComponentStyles } from '@quincarter/my-side-nav/CoreMySideNavComponent';
 * ```
 *
 * ## Core Usage Example
 * ### Core Interface
 * ```typescript
 * import { LitElement } from 'lit';
 * import { IMySideNavComponent } from '@quincarter/my-side-nav/CoreMySideNavComponent';
 *
 * export class FooBar extends LitElement implements IMySideNavComponent {
 * // TODO: Implement Interface definition
 * }
 * ```
 *
 * ### Core Styles
 * ```typescript
 * import { LitElement } from 'lit';
 * import { MySideNavComponentStyles } from '@quincarter/my-side-nav/CoreMySideNavComponent';
 *
 * export class BarFoo extends LitElement {
 *     static get styles(): CSSResult[] {
 *         return [
 *             MySideNavComponentStyles,
 *             css`/* my css here /*`
 *         ];
 *     }
 * }
 * ```
 *
 *
 * @element my-side-nav
 *
 *
 */
export class MySideNavComponent
  extends LitElement
  implements IMySideNavComponent
{
  /**
   * List of links and their children for the side navigation
   * @attr nav-links
   * @example
   * [{
   *   name: 'Test Name',
   *   link: 'https://foo.bar',
   *   icon: 'fa-dashboard'
   * }, {
   *   name: 'Test with children',
   *   link: 'https://foo.bar.children',
   *   icon: 'fa-home',
   *   children: [{
   *     name: 'first child',
   *     link: 'https://foo.bar.firstChild',
   *     icon: 'fa-edit'
   *   }]
   * }]
   *
   */
  @property({ type: Array, attribute: 'nav-links' })
  navLinks: NavLinks[] | undefined;

  static get styles(): CSSResult[] {
    return [MySideNavComponentStyles, FontAwesome];
  }

  protected firstUpdated(
    _changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>
  ): void {
    super.firstUpdated(_changedProperties);
    this.shadowRoot
      ?.querySelector('.nav-toggle')
      ?.addEventListener('click', e => {
        e.preventDefault();
        this.shadowRoot
          ?.querySelector('.container')
          ?.classList.toggle('openNav');
        this.shadowRoot
          ?.querySelector('.nav-toggle')
          ?.classList.toggle('active');
      });
  }

  /**
   * Renders the side nav links passed into the .navLinks object
   * @returns A list of links and their properties in a TemplateResult
   */
  renderSideNavLinks() {
    return this.navLinks?.map(
      (navItem: NavLinks) => html`
        <li class="${navItem?.children?.length ? 'menu-hasdropdown' : ''}">
          <a href="${navItem.link}">${navItem.name}</a
          ><span class="icon"><i class="fa ${navItem.icon}"></i></span>

          ${navItem.children?.length
            ? html`
                <label
                  title="toggle menu"
                  for="id-${navItem.name.replace(/\s/g, '')}"
                >
                  <span class="downarrow"
                    ><i class="fa fa-caret-down"></i
                  ></span>
                </label>
                <input
                  type="checkbox"
                  class="sub-menu-checkbox"
                  id="id-${navItem.name.replace(/\s/g, '')}"
                />

                <ul class="sub-menu-dropdown">
                  ${navItem?.children?.map(
                    child =>
                      html`<li><a href="${child.link}">${child.name}</a></li>`
                  )}
                </ul>
              `
            : html``}
        </li>
      `
    );
  }

  render(): HTMLTemplateResult {
    return html`
      <div class="container">
        <div class="primary-nav">
          <button href="#" class="hamburger open-panel nav-toggle">
            <span class="screen-reader-text">Menu</span>
          </button>

          <nav role="navigation" class="menu">
            <a href="#" class="logotype">LOGO<span>HERE</span></a>

            <div class="overflow-container">
              <ul class="menu-dropdown">
                <!-- <li>
                  <a href="#">Architecture Portal</a
                  ><span class="icon"><i class="fa fa-dashboard"></i></span>
                </li>

                <li class="menu-hasdropdown">
                  <a href="#">My Systems</a
                  ><span class="icon"><i class="fa fa-gear"></i></span>

                  <label title="toggle menu" for="settings">
                    <span class="downarrow"
                      ><i class="fa fa-caret-down"></i
                    ></span>
                  </label>
                  <input
                    type="checkbox"
                    class="sub-menu-checkbox"
                    id="settings"
                  />

                  <ul class="sub-menu-dropdown">
                    <li><a href="">Onboarding</a></li>
                    <li><a href="">Releases</a></li>
                    <li><a href="">Something else</a></li>
                  </ul>
                </li>

                <li>
                  <a href="#">Capabilities</a
                  ><span class="icon"><i class="fa fa-heart"></i></span>
                </li>

                <li>
                  <a href="#">Reviews</a
                  ><span class="icon"><i class="fa fa-envelope"></i></span>
                </li> -->
                ${this.renderSideNavLinks()}
              </ul>
            </div>
          </nav>
        </div>

        <div class="content-wrapper">
          <div id="main">
            <div id="main-contents">
              <slot></slot>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
