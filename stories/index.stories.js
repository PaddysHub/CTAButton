import { html } from 'lit';
// import '../cta-button.js';
export default {
  title: 'CtaButton',
  component: 'cta-button',
  argTypes: {
    title: { control: 'text' },
    link: { control: 'number' },
    textColor: { control: 'color' },
    icon: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};
function Template({
  // title = 'Grey Goose',
  link = 'https://www.greygoose.com/products.html?utm_source=google&utm_medium=paidsearch&utm_c[…]jfRq-mCM4HhCqWQQelgq6Ws7HM9PC8Y7AzTYmTVj0hwT3KRoCV1oQAvD_BwE',
  textColor,
  icon,
  disabled = false,
}) {
  return html`
    <cta-button
      style="--cta-button-text-color: ${textColor || 'black'}"
      // title="Grey Goose"
      .link=${link}
      .icon=${icon}
      .disabled=${disabled}
    >
      
    </cta-button>
  `;
}
export const Regular = Template.bind({});
