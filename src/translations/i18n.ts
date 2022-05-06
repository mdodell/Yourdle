import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// We have to import all JSON
import common from './en/common.json';

i18n.use(initReactI18next).init({
	fallbackLng: 'en',
	resources: {
		en: {
			common,
		},
	},
});

export default i18n;
