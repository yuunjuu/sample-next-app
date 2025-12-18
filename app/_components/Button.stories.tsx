import { Button } from './Button';

const meta = {
  title: 'Component/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export default meta;

export const Primary = {
  args: {
    backgroundColor: '#fff',
  },
};
