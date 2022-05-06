import { Button } from '@mantine/core';
import type { NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';

const Home: NextPage = () => {
	const { t } = useTranslation();
	return (
		<Link href='/about' passHref>
			<Button component='a'>{t('about')}</Button>
		</Link>
	);
};

export const getServerSideProps = async ({ locale }: { locale: string }) => ({
	props: {
		...(await serverSideTranslations(locale, ['common'])),
	},
});

export default Home;
