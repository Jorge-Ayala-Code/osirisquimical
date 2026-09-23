import es from './lenguage/es.json';
import en from './lenguage/en.json';
const ui = { es, en };

export function useTranslations(lang: 'es' | 'en') {
  return function t(key: keyof typeof es) {
    const translations = ui[lang] || ui['es'];
    return translations[key] || ui['es'][key] || key; 
  }
}
export function getLangHelpers(currentLocale: string | undefined) {
  const lang = (currentLocale as 'es' | 'en') || 'es';
  const t = useTranslations(lang);
  const l = (path: string) => {
    const normalizedPath = path.startsWith('/') ? path : `/${path}`;
    return lang === 'en' ? `/en${normalizedPath}` : normalizedPath;
  };

  return { lang, t, l };
}