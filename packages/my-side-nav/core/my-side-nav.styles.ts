import { css, CSSResult } from 'lit';

export const MySideNavComponentStyles: CSSResult = css`
  :host {
    --test-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16),
      0 3px 6px rgba(0, 0, 0, 0.23);
    --default-card-padding: 2rem;
  }

  body {
    font-family: 'Work Sans', sans-serif;
    margin: 0;
    background-color: #eee;
  }

  /* Layout */

  #container {
    padding: 0;
    margin: 0;
    background-color: #fff;
  }

  #main {
    padding: 4% 1.5em;
    max-width: 55em;
    margin: 0 auto;
  }

  #header {
    padding: 1.5em;
    margin: 0 0 1em 0;
    background-color: #eee;
  }

  #footer {
    padding: 1.5em;
    margin: 2em 0 0 0;
    background-color: #eee;
  }

  /* Menu Styles */

  .primary-nav {
    position: fixed;
    z-index: 999;
  }

  .menu {
    position: relative;
  }

  .menu ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .open-panel {
    border: none;
    background-color: #fff;
    padding: 0;
  }

  .hamburger {
    background: #fff;
    position: relative;
    display: block;
    text-align: center;
    padding: 13px 0;
    width: 50px;
    height: 73px;
    left: 0;
    top: 0;
    z-index: 1000;
    cursor: pointer;
  }

  .hamburger:before {
    content: '\\2630'; /* hamburger icon */
    display: block;
    color: #000;
    line-height: 32px;
    font-size: 16px;
  }

  .openNav .hamburger:before {
    content: '\\2715'; /* close icon */
    display: block;
    color: #000;
    line-height: 32px;
    font-size: 16px;
  }

  .hamburger:hover:before {
    color: #777;
  }

  .primary-nav .menu li {
    position: relative;
  }

  .menu .icon {
    position: absolute;
    top: 12px;
    right: 10px;
    pointer-events: none;
    width: 24px;
    height: 24px;
    color: #fff;
  }

  .menu,
  .menu a,
  .menu a:visited {
    color: #fff;
    text-decoration: none !important;
    position: relative;
  }

  .menu a {
    display: block;
    white-space: nowrap;
    padding: 1em;
    font-size: 14px;
  }

  .menu a:hover {
    color: #fff;
    background-color: #005d8c;
  }

  .menu {
    margin-bottom: 3em;
  }

  .menu-dropdown li .icon {
    color: #fff;
  }

  .menu-dropdown li:hover .icon {
    color: #fff;
  }

  .menu label {
    margin-bottom: 0;
    display: block;
  }

  .menu label:hover {
    cursor: pointer;
  }

  .menu input[type='checkbox'] {
    display: none;
  }

  input#menu[type='checkbox'] {
    display: none;
  }

  .sub-menu-dropdown {
    display: none;
  }

  .content-wrapper {
    position: absolute;
    left: 50px;
    width: calc(100% - 50px);
    transition: transform 0.45s cubic-bezier(0.77, 0, 0.175, 1);
  }

  #menu:checked + ul.menu-dropdown {
    left: 0;
    -webkit-animation: all 0.45s cubic-bezier(0.77, 0, 0.175, 1);
    animation: all 0.45s cubic-bezier(0.77, 0, 0.175, 1);
  }

  .sub-menu-checkbox:checked + ul.sub-menu-dropdown {
    display: block !important;
    -webkit-animation: grow 0.45s cubic-bezier(0.77, 0, 0.175, 1);
    animation: grow 0.45s cubic-bezier(0.77, 0, 0.175, 1);
  }

  .openNav .content-wrapper {
    position: absolute;
    transform: translate3d(200px, 0, 0);
    width: calc(100% - 250px);
    transition: transform 0.45s cubic-bezier(0.77, 0, 0.175, 1);
  }

  .downarrow {
    background: transparent;
    position: absolute;
    right: 50px;
    top: 12px;
    color: #fff;
    width: 24px;
    height: 24px;
    text-align: center;
    display: block;
  }

  .downarrow:hover {
    color: #fff;
  }

  .menu {
    position: absolute;
    display: block;
    left: -200px;
    top: 0;
    width: 250px;
    transition: all 0.45s cubic-bezier(0.77, 0, 0.175, 1);
    background-color: #0276b1;
    z-index: 999;
  }

  .menu-dropdown {
    top: 0;
    overflow-y: auto;
  }

  .overflow-container {
    position: relative;
    height: calc(100vh - 73px) !important;
    overflow-y: auto;
    border-top: 73px solid #fff;
    z-index: -1;
    display: block;
  }

  .menu a.logotype {
    position: absolute !important;
    top: 11px;
    left: 55px;
    display: block;
    font-family: 'Work Sans', sans-serif;
    text-transform: uppercase;
    font-weight: 800;
    color: #000;
    font-size: 21px;
    padding: 10px;
  }

  .menu a.logotype span {
    font-weight: 400;
  }

  .menu a.logotype:hover {
    color: #777;
    background-color: transparent;
  }

  .sub-menu-dropdown {
    background-color: #005d8c;
  }

  .sub-menu-dropdown > li > a:hover {
    background-color: #004162;
  }

  .menu:hover {
    position: absolute;
    left: 0;
    top: 0;
  }

  .openNav .menu:hover {
    position: absolute;
    left: -200px;
    /* 	top: 73px; */
  }

  .openNav .menu {
    /*   top: 73px; */
    transform: translate3d(200px, 0, 0);
    transition: transform 0.45s cubic-bezier(0.77, 0, 0.175, 1);
  }

  /* label.hamburger {
		display: none;
	} */

  /* look and feel only, not needed for core menu*/

  @-webkit-keyframes grow {
    0% {
      display: none;
      opacity: 0;
    }
    50% {
      display: block;
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes grow {
    0% {
      display: none;
      opacity: 0;
    }
    50% {
      display: block;
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }

  /* Text meant only for screen readers. */

  .screen-reader-text {
    clip: rect(1px, 1px, 1px, 1px);
    position: absolute !important;
    height: 1px;
    width: 1px;
    overflow: hidden;
  }

  .screen-reader-text:focus {
    background-color: #f1f1f1;
    border-radius: 3px;
    -webkit-box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.6);
    box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.6);
    clip: auto !important;
    color: #21759b;
    display: block;
    font-size: 14px;
    font-size: 0.875rem;
    font-weight: bold;
    height: auto;
    left: 5px;
    line-height: normal;
    padding: 15px 23px 14px;
    text-decoration: none;
    top: 5px;
    width: auto;
    z-index: 100000;
    /* Above WP toolbar. */
  }

  /* Resposive Typography */

  body,
  button,
  input,
  select,
  optgroup,
  textarea {
    color: #000;
    font-size: 1em;
    line-height: 1.5;
    font-weight: 300;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    clear: both;
    font-weight: 800;
  }

  dfn,
  cite,
  em,
  i {
    font-style: italic;
  }

  blockquote {
    margin: 0 1.5em;
  }

  address {
    margin: 0 0 1.5em;
  }

  pre {
    background: #eee;
    font-family: 'Courier 10 Pitch', Courier, monospace;
    font-size: 15px;
    font-size: 0.9375rem;
    line-height: 1.6;
    margin-bottom: 1.6em;
    max-width: 100%;
    overflow: auto;
    padding: 1.6em;
  }

  code,
  kbd,
  tt,
  var {
    font-family: Monaco, Consolas, 'Andale Mono', 'DejaVu Sans Mono', monospace;
    font-size: 15px;
    font-size: 0.9375rem;
  }

  abbr,
  acronym {
    border-bottom: 1px dotted #666;
    cursor: help;
  }

  mark,
  ins {
    background: #fff9c0;
    text-decoration: none;
  }

  big {
    font-size: 125%;
  }

  .light {
    color: #ddd;
  }

  strong {
    font-weight: 600;
  }

  cite,
  em,
  i {
    font-style: italic;
  }

  p.big {
    font-size: 140%;
    line-height: 1.3em;
  }

  p.small {
    font-size: 80%;
  }

  blockquote {
    display: block;
    margin: 1em 20px;
    padding: 0 1em;
    position: relative;
  }

  blockquote:before {
  }

  blockquote cite,
  blockquote em,
  blockquote i {
    font-style: italic;
  }

  abbr,
  acronym {
    border-bottom: 1px dotted #666;
    cursor: help;
  }

  sup,
  sub {
    height: 0;
    line-height: 1;
    vertical-align: baseline;
    position: relative;
  }

  sup {
    bottom: 1ex;
  }

  sub {
    top: 0.5ex;
  }

  p {
    font-size: 1em;
    margin: 0 0 2em 0;
  }

  article:last-of-type,
  p:last-of-type {
    margin-bottom: 0;
  }

  p.intro {
    font-size: 1.25em;
    line-height: 1.5;
    font-weight: 300;
    margin: 0 0 1.5em 0;
  }

  h1,
  h2 {
    letter-spacing: -1px;
  }

  h1,
  .h1,
  h2,
  .h2,
  h3,
  .h3,
  h4,
  .h4 {
    margin: 0 0 0.5em 0;
    line-height: 1.1;
  }

  h1,
  .h1 {
    font-size: 2.074em;
  }

  h2,
  .h2 {
    font-size: 1.728em;
  }

  h3,
  .h3 {
    font-size: 1.44em;
  }

  h4,
  .h4 {
    font-size: 1.2em;
  }

  /* Medium Screen Typography - Scale: 1.333 Perfect Fourth (thanks http://type-scale.com/)  */

  @media screen and (min-width: 42em) {
    h1,
    .h1 {
      letter-spacing: -2px;
    }

    h1,
    .h1 {
      font-size: 3.157em;
    }

    h2,
    .h2 {
      font-size: 2.369em;
    }

    h3,
    .h3 {
      font-size: 1.777em;
    }

    h4,
    .h4 {
      font-size: 1.333em;
    }

    p {
      font-size: 1.0625em;
    }

    p.intro {
      font-size: 1.3em;
    }
  }

  /* Large Screen Typography  - Scale: 1.414 Augmented Fourth (thanks http://type-scale.com/)  */

  @media screen and (min-width: 72em) {
    h1 {
      letter-spacing: -3px;
    }

    h1,
    .h1 {
      margin-bottom: 0.35em;
      font-size: 3.998em;
    }

    h2,
    .h2 {
      font-size: 2.827em;
    }

    h3,
    .h3 {
      font-size: 1.999em;
    }

    h4,
    .h4 {
      font-size: 1.414em;
    }

    p {
      font-size: 1.125em;
    }

    p.intro {
      font-size: 1.4em;
    }
  }
`;
