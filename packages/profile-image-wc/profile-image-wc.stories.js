import { html } from 'lit';
import './index.js';
import transparentProfileImage from './profile-image.png';

export default {
  title: 'Components/Informative',
  component: 'profile-image-wc',
  argTypes: {
    src: { control: 'text' },
    width: { control: 'text' },
    height: { control: 'text' },
    profileBorder: { control: 'boolean' },
    shape: { control: 'select', options: [null, 'ellipse', 'pill'] },
    accentColor: { control: 'color' },
  },
};

function Template({ src, width, height, shape, profileBorder, accentColor }) {
  return html`
    <profile-image-wc
      src="${src}"
      width="${width}"
      height="${height}"
      shape="${shape}"
      ?profile-border="${profileBorder}"
      accentColor="${accentColor}"
    ></profile-image-wc>
  `;
}

export const ProfileImage = Template.bind({});
ProfileImage.args = {
  src: transparentProfileImage,
  width: 'unset',
  height: 'unset',
  shape: null,
  profileBorder: false,
  accentColor: '#b7bab8',
};
