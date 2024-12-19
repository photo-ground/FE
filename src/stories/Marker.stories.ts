import Marker from '@/app/map/_components/Marker';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Marker> = {
  title: 'Components/Marker',
  component: Marker,
  parameters: {
    // Optional parameter for layout adjustments
    layout: 'centered',
  },
  tags: ['autodocs'], // Automatically generate documentation
};

export default meta;
type Story = StoryObj<typeof meta>;

export const EWHA: Story = {
  args: {
    src: 'https://via.placeholder.com/150',
    title: 'Markers',
  },
};
