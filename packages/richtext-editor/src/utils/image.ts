import { i18n } from '../i18n';

// TODO
export function uploadImage(): Promise<string> {
  const url = window.prompt(i18n.t('Enter the URL of the image'));
  return Promise.resolve(url!);
}
