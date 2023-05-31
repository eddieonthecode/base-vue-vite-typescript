import { createI18n} from 'vue-i18n';
import i18nCommonVN from './vi/i18nCommon';
import i18nCommonEN from './en/i18nCommon';

export const i18n  = createI18n({
    locale: 'vi',
    fallbackLocale: 'vi',
    messages: {
        vi: {
            i18nCommon: i18nCommonVN
        },
        en: {
            i18nCommon: i18nCommonEN
        },
    }
})
