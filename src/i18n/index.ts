import español from '@/i18n/es.json';
import english from '@/i18n/en.json';

const LANGUAGES = {
    ESPAÑOL: "es",
    ENGLISH: "en"
};

export const getI18N = ({currentLocale}: {currentLocale: string}) => {
    switch (currentLocale) {
        case LANGUAGES.ESPAÑOL:
            return español;

        case LANGUAGES.ENGLISH:
            return english;

        default:
            return español;
    }
};