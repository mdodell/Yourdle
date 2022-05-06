import { useDarkMode } from 'storybook-dark-mode';
import { ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { I18nextProvider } from 'react-i18next';
// @ts-expect-error not getting relative types but works fine
import i18n from '@translations/i18n';

function ThemeWrapper(props: { children: React.ReactNode }): JSX.Element {
	return (
		<ColorSchemeProvider colorScheme='light' toggleColorScheme={() => {}}>
			<MantineProvider
				theme={{
					colorScheme: useDarkMode() ? 'dark' : 'light',
				}}
				withGlobalStyles
				withNormalizeCSS
			>
				{props.children}
			</MantineProvider>
		</ColorSchemeProvider>
	);
}

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
		expanded: true,
	},
	viewport: {
		viewports: INITIAL_VIEWPORTS,
	},
	layout: 'fullscreen',
};

export const decorators = [
	(renderStory: Function) => (
		<ThemeWrapper>
			<I18nextProvider i18n={i18n}>{renderStory()}</I18nextProvider>
		</ThemeWrapper>
	),
];
