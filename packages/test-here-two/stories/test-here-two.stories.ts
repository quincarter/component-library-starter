import { TemplateResult, html } from 'lit';
import '../lib/index.js';

export default {
  title: 'New/Components/TestHereTwo',
  component: 'test-here-two',
  argTypes: {
    testHereTwoTitle: { control: 'text' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  testHereTwoTitle: string;
}

const TestHereTwoTemplate: Story<ArgTypes> = ({ testHereTwoTitle }) => html`
  <test-here-two .testHereTwoTitle="${testHereTwoTitle}"></test-here-two>
`;

export const TestHereTwo = TestHereTwoTemplate.bind({});
TestHereTwo.args = {
  testHereTwoTitle: 'test-here-two works!',
};
