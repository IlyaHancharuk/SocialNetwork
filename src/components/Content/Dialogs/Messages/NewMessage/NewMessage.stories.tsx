import type { Meta, StoryObj } from '@storybook/react';
import NewMessage from './NewMessage';

const meta: Meta<typeof NewMessage> = {
    title: 'NewMessage',
    component: NewMessage,
    argTypes: { dispatch: { action: 'some action dispatch' } },
};

export default meta;
type Story = StoryObj<typeof NewMessage>;

export const TestNewMessage: Story = {
    args: {
        
    }
};