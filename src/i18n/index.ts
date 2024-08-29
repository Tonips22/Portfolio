import español from '@/i18n/es.json';
import english from '@/i18n/en.json';
import italiano from '@/i18n/it.json';

const LANGUAGES = {
    ESPAÑOL: "es",
    ENGLISH: "en",
    ITALIANO: "it"
};

export const getI18N = ({currentLocale}: {currentLocale: string}) => {
    switch (currentLocale) {
        case LANGUAGES.ESPAÑOL:
            return español;

        case LANGUAGES.ENGLISH:
            return english;

        case LANGUAGES.ITALIANO:
            return italiano;

        default:
            return español;
    }
};