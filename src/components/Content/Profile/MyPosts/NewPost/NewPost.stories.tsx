import type { Meta, StoryObj } from '@storybook/react';
import NewPost from './NewPost';

const meta: Meta<typeof NewPost> = {
    title: 'NewPost',
    component: NewPost,
    argTypes: { dispatch: { action: 'some action dispatch' } },
};

export default meta;
type Story = StoryObj<typeof NewPost>;

export const TestNewPost: Story = {
    args: {
        
    }
};