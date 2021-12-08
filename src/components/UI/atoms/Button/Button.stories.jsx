import React from 'react';

import Button from './Button.component.jsx'

export default {
    component: Button,
    title: 'UI/Atoms/Button',
}

const Template = (args) => <Button {...args} />

export const Purple = Template.bind({});
Purple.args = { buttonLabel: 'Test', green: false };

export const Green = Template.bind({});
Green.args = { buttonLabel: 'Test', green: true };
