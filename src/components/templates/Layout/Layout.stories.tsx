import {
	generateStorybookConfig,
	generateStorybookTemplate,
} from '@utils/storybook/storyGenerationUtils';

import Layout from './Layout';

const config = generateStorybookConfig({
	Component: Layout,
	variant: 'template',
});

const Template = generateStorybookTemplate(Layout);

export const BasicLayout = Template.bind({});

export default config;
