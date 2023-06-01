import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';

const resources = {}

console.log('i18n');


i18next
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en',
        debug: false,
        fallbackLng: 'en',
        saveMissing: true
    });

export default i18next;