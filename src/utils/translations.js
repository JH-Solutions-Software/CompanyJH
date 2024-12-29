import en from '../assets/languages/en.json';
import es from '../assets/languages/es.json';

const translations = {
  en,
  es
};

export const translate = (lang, key) => {
  const keys = key.split('.');
  let translation = translations[lang];
  keys.forEach(k => {
    translation = translation[k];
  });
  return translation || key;
};