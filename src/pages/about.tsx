import { NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const About: NextPage = () => {
	return <h1>About Page</h1>;
};

export const getServerSideProps = async ({ locale }: { locale: string }) => ({
	props: {
		...(await serverSideTranslations(locale, ['common'])),
	},
});

export default About;
