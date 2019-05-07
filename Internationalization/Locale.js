import { I18n } from 'aws-amplify';

export const setUpLanguage = (lang) => { 
    if (lang == 'en') {
        I18n.setLanguage('en');
    } else if (lang == 'es-US'){
        I18n.setLanguage('es');
    }
}

export const loadVocabularies = () => {
    
    const dict = {
        'en': {
            'Welcome': `Hello World!! Welcome..`
        },
        'es': {
            'Welcome': `Hola Mundo!! Bienvenido..`
        },
    };

    I18n.putVocabularies(dict);

}