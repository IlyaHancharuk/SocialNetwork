import type { Meta, StoryObj } from '@storybook/react';
import NewPost from './NewPost';

const meta: Meta<typeof NewPost> = {
    title: 'NewPost',
    component: NewPost,
    argTypes: { addPost: { action: 'add post' }, },
};

export default meta;
type Story = StoryObj<typeof NewPost>;

export const TestNewPost: Story = {
    args: {
        
    }
};