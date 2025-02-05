/* eslint-disable react/jsx-props-no-spreading */

import { Meta, StoryObj } from '@storybook/react';
import CTAButton from '@/components/atoms/CTAButton';

const meta = {
  title: 'Button/CTAButton',
  component: CTAButton.Primary,
  argTypes: {
    text: { control: 'text' },
    disabled: { control: 'boolean' },
    onClick: { action: 'clicked' },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CTAButton.Primary>;

export default meta;
type Story = StoryObj<typeof meta>;

// Primary Button Story
export const Primary: Story = {
  args: {
    text: 'Primary Button',
    disabled: false,
    type: 'button',
  },
  render: (args) => <CTAButton.Primary {...args} />,
};

// Secondary Button Story
export const Secondary: Story = {
  args: {
    text: 'Secondary Button',
    disabled: false,
    type: 'button',
  },
  render: (args) => <CTAButton.Secondary {...args} />,
};

// Tertiary Button Story
export const Tertiary: Story = {
  args: {
    text: 'Tertiary Button',
    disabled: false,
    type: 'button',
  },
  render: (args) => <CTAButton.Tertiary {...args} />,
};

// Disabled 상태 확인
export const Disabled: Story = {
  args: {
    text: 'Disabled Button',
    disabled: true,
  },
  render: (args) => <CTAButton.Primary {...args} />,
};
