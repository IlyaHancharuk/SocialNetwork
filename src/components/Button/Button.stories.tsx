import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';
import { useState } from 'react';


const meta: Meta<typeof Button> = {

    title: 'Button',
    component: Button,
    argTypes: { callback: { action: 'clicked' } },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const TestButton: Story = {
    args: {
        text: 'TEST',
    }
};

export const ADD = () => {
    const [value, setValue] = useState('add')
    return <Button text={value} callback={() => {setValue('click')}} />
};