import { AppProps } from 'next/app';
import Head from 'next/head';
import { I18nextProvider } from 'react-i18next';

import ThemeProvider from '@providers/ThemeProvider/ThemeProvider';
import Layout from '@templates/Layout';
import i18n from '@translations/i18n';

function App(props: AppProps) {
	const { Component, pageProps } = props;

	return (
		<>
			<Head>
				<title>Yourdle</title>
				<meta
					name='viewport'
					content='minimum-scale=1, initial-scale=1, width=device-width'
				/>
			</Head>

			<ThemeProvider>
				<I18nextProvider i18n={i18n}>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</I18nextProvider>
			</ThemeProvider>
		</>
	);
}

export default App;
