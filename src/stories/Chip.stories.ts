import type { Meta, StoryObj } from '@storybook/react';

import Chip from '@/app/map/_components/Chip';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Chip> = {
  title: 'Button/Chip',
  component: Chip,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    // layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: 'Primary Button',
    variant: 'primary',
    disabled: false,
  },
};

export const Secondary: Story = {
  args: {
    text: 'Secondary Button',
    variant: 'secondary',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    text: 'Disabled Button',
    variant: 'primary',
    disabled: true,
  },
};
