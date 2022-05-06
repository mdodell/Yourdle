import { useState } from 'react';

import {
	ColorScheme,
	ColorSchemeProvider,
	MantineProvider,
} from '@mantine/core';
import { getCookie, setCookies } from 'cookies-next';
import { GetServerSidePropsContext } from 'next';

interface ThemeProviderProps {
	colorScheme?: ColorScheme;
	children: React.ReactNode;
}

function ThemeProvider(props: ThemeProviderProps) {
	const [colorScheme, setColorScheme] = useState<ColorScheme>(
		props.colorScheme || 'light'
	);

	const toggleColorScheme = (value?: ColorScheme) => {
		const nextColorScheme =
			value || (colorScheme === 'dark' ? 'light' : 'dark');
		setColorScheme(nextColorScheme);
		setCookies('mantine-color-scheme', nextColorScheme, {
			maxAge: 60 * 60 * 24 * 30,
		});
	};

	return (
		<ColorSchemeProvider
			colorScheme={colorScheme}
			toggleColorScheme={toggleColorScheme}
		>
			<MantineProvider
				theme={{ colorScheme }}
				withGlobalStyles
				withNormalizeCSS
			>
				{props.children}
			</MantineProvider>
		</ColorSchemeProvider>
	);
}

ThemeProvider.getInitialProps = ({
	ctx,
}: {
	ctx: GetServerSidePropsContext;
}) => ({
	colorScheme: getCookie('mantine-color-scheme', ctx) || 'light',
});

export default ThemeProvider;
