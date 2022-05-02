import Header from '@organisms/Header';
import {
	generateStorybookConfig,
	generateStorybookTemplate,
} from '@utils/storybook/storyGenerationUtils';

const config = generateStorybookConfig({
	Component: Header,
	variant: 'organism',
});

const Template = generateStorybookTemplate(Header);

export const Closed = Template.bind({});
Closed.args = {
	opened: false,
};

export const Opened = Template.bind({});
Opened.args = {
	opened: true,
};

export default config;
