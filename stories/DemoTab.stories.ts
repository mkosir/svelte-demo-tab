import DemoTab from '../src/index';

const meta = {
  title: 'Examples',
};

export default meta;

export const Text = () => ({
  Component: DemoTab,
  props: { name: 'World', buttonText: 'Hello Button' },
});

export const Emoji = () => ({
  Component: DemoTab,
  props: { name: '😀 😎', buttonText: '👍 💯' },
});
