import { createI18n } from 'vue-i18n';
import languageZhCn from '../lang/zh-CN.js';
import languageEnUs from '../lang/en-US.js';
import languageJp from '../lang/jp.js'
import Cookies from "js-cookie";

const messages =  {
    zhCn: {
        ...languageZhCn,
    },
    enUs: {
        ...languageEnUs,
    },
    jp: {
        ...languageJp,
    }
}

const i18n = createI18n({
    locale: Cookies.get('language') || 'zhCn',
    messages,
})

export default i18n