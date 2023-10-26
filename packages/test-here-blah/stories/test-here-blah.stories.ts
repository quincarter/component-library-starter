import { TemplateResult, html } from 'lit';
import '../lib/index.js';

export default {
  title: 'New/Components/TestHereBlah',
  component: 'test-here-blah',
  argTypes: {
    testHereBlahTitle: { control: 'text' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  testHereBlahTitle: string;
}

const TestHereBlahTemplate: Story<ArgTypes> = ({ testHereBlahTitle }) => html`
  <test-here-blah .testHereBlahTitle="${testHereBlahTitle}"></test-here-blah>
`;

export const TestHereBlah = TestHereBlahTemplate.bind({});
TestHereBlah.args = {
  testHereBlahTitle: 'test-here-blah works!',
};
