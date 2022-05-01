import {
	generateStorybookConfig,
	generateStorybookTemplate,
} from '@utils/storybook/storyGenerationUtils';

import TestComponent from './TestComponent';

const config = generateStorybookConfig({
	Component: TestComponent,
	variant: 'atom',
	argTypes: {
		name: {
			defaultValue: 'World',
		},
	},
});

const Template = generateStorybookTemplate(TestComponent);

export const BasicExample = Template.bind({});

export default config;
