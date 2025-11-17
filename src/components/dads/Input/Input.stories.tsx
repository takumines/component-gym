import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from '../Input';

const meta = {
  id: 'Component/DADS v2/Input',
  title: 'Component/インプットテキスト',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    blockSize: {
      options: ['lg', 'md', 'sm'],
      control: { type: 'radio' },
      description: 'インプットテキストの垂直方向のサイズ（高さ）を以下から選択します。',
      table: {
        defaultValue: { summary: 'lg' },
        type: { summary: "'lg', 'md', 'sm'" },
      },
    },
    isError: {
      description: 'エラー状態であるかどうかを指定します。',
      control: { type: 'boolean' },
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: '入力してください',
    blockSize: 'lg',
    isError: false,
  },
};

export const Medium: Story = {
  args: {
    placeholder: '入力してください',
    blockSize: 'md',
    isError: false,
  },
};

export const Small: Story = {
  args: {
    placeholder: '入力してください',
    blockSize: 'sm',
    isError: false,
  },
};

export const ErrorState: Story = {
  args: {
    placeholder: '入力してください',
    blockSize: 'lg',
    isError: true,
  },
};

export const ReadOnly: Story = {
  args: {
    value: '読み取り専用のテキストです',
    blockSize: 'lg',
    readOnly: true,
  },
};

export const Disabled: Story = {
  args: {
    placeholder: '入力できません',
    blockSize: 'lg',
    'aria-disabled': true,
  },
};

export const DisabledErrorState: Story = {
  args: {
    placeholder: '入力できません',
    blockSize: 'lg',
    isError: true,
    'aria-disabled': true,
  },
};
