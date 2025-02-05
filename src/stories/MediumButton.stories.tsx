/* eslint-disable react/jsx-props-no-spreading */

import { Meta, StoryObj } from '@storybook/react';
import MediumButton from '@/components/atoms/MediumButton';

const meta = {
  title: 'Button/MediumButton',
  component: MediumButton.Primary,
  argTypes: {
    text: { control: 'text' },
    disabled: { control: 'boolean' },
    onClick: { action: 'clicked' },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MediumButton.Primary>;

export default meta;
type Story = StoryObj<typeof meta>;

// Primary Button Story
export const Primary: Story = {
  args: {
    text: 'Primary Button',
    disabled: false,
    type: 'button',
  },
  render: (args) => <MediumButton.Primary {...args} />,
};

// Secondary Button Story
export const Secondary: Story = {
  args: {
    text: 'Secondary Button',
    disabled: false,
    type: 'button',
  },
  render: (args) => <MediumButton.Secondary {...args} />,
};
