import Card from '@/components/Card';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    // Optional parameter for layout adjustments
    layout: 'centered',
  },
  tags: ['autodocs'], // Automatically generate documentation
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    size: 'small',
    src: 'https://via.placeholder.com/150',
    title: 'Small Card',
    content: 'This is a small card.',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    src: 'https://via.placeholder.com/150',
    title: 'Medium Card',
    content: 'This is a medium card.',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    src: 'https://via.placeholder.com/150',
    title: 'Large Card',
    content: 'This is a large card.',
  },
};
