import { TemplateResult, html } from 'lit';
import '../lib/index.js';

export default {
  title: 'New/Components/TestTestTest',
  component: 'test-test-test',
  argTypes: {
    testTestTestTitle: { control: 'text' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  testTestTestTitle: string;
}

const TestTestTestTemplate: Story<ArgTypes> = ({ testTestTestTitle }) => html`
  <test-test-test .testTestTestTitle="${testTestTestTitle}"></test-test-test>
`;

export const TestTestTest = TestTestTestTemplate.bind({});
TestTestTest.args = {
  testTestTestTitle: 'test-test-test works!',
};
