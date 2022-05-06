interface IReactI18n {
	useTranslation: () => {
		t: (str: string) => string;
		i18n: {
			changeLanguage: () => Promise<unknown>;
		};
	};
}

const reactI18Next: IReactI18n = jest.createMockFromModule('next-i18next');

reactI18Next.useTranslation = () => {
	return {
		t: (str: string) => str,
		i18n: {
			changeLanguage: () => new Promise(() => Promise.resolve({})),
		},
	};
};

module.exports = reactI18Next;

export default {};
