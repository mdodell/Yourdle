import ThemeSwitch from '@atoms/ThemeSwitch';
import {
	generateStorybookConfig,
	generateStorybookTemplate,
} from '@utils/storybook/storyGenerationUtils';

const config = generateStorybookConfig({
	Component: ThemeSwitch,
	variant: 'atom',
	parameters: {
		layout: 'padded',
	},
});

const Template = generateStorybookTemplate(ThemeSwitch);

export const BasicExample = Template.bind({});

export default config;
