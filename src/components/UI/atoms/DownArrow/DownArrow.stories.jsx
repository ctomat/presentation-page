import React from 'react';

import DownArrow from './DownArrow.component.jsx';

export default {
    component: DownArrow,
    title: 'UI/Atoms/Arrow'
}

const Template = (args) => <DownArrow {...args} />

export const Regular = Template.bind({});
Regular.args = {};
