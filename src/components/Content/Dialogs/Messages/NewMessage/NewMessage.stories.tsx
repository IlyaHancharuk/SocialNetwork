import type { Meta, StoryObj } from '@storybook/react';
import NewMessage from './NewMessage';

const meta: Meta<typeof NewMessage> = {
    title: 'NewMessage',
    component: NewMessage,
    argTypes: { sendMessage: { action: 'send message' }, changeMessageText: { action: 'change message text' } },
};

export default meta;
type Story = StoryObj<typeof NewMessage>;

export const TestNewMessage: Story = {
    args: {
        
    }
};