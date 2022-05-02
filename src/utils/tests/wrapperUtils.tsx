import { ReactElement, useState } from 'react';

import {
	ColorScheme,
	ColorSchemeProvider,
	MantineProvider,
} from '@mantine/core';
import { render } from '@testing-library/react';

// Add in any providers here if necessary:
// (ReduxProvider, ThemeProvider, etc)
const Providers = ({ children }: { children: ReactElement }) => {
	const [colorScheme, setColorScheme] = useState<ColorScheme>('light');

	return (
		<ColorSchemeProvider
			colorScheme={colorScheme}
			toggleColorScheme={() => setColorScheme(colorScheme ? 'light' : 'dark')}
		>
			<MantineProvider theme={{ colorScheme }}>{children}</MantineProvider>
		</ColorSchemeProvider>
	);
};

const customRender = (ui: ReactElement, options = {}) =>
	render(ui, { wrapper: Providers, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
