import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';

import nl from './languages/nl/translation.json';

const resources = {
    nl: {
        translation: nl,
    }
};

declare module 'i18next' {
    interface CustomTypeOptions {
      returnNull: false;
    }
}

i18next.use(initReactI18next).init({
    resources,
    debug: false,
    lng: 'nl',
    fallbackLng: 'nl',
    returnNull: false,
});

export default i18next;