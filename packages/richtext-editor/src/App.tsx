import * as React from 'react';
import { useEffect, useState, createElement, ComponentProps } from 'react';
import { I18nextProvider } from 'react-i18next';
import { initI18N, i18n } from './i18n';
import { Editor as EditorComponent } from './components/Editor';

export function Editor(props: ComponentProps<typeof EditorComponent>) {
  const [render, setRender] = useState(false);
  useEffect(() => {
    initI18N.then(() => setRender(true));
  }, []);

  if (!render) {
    return null;
  }

  return <I18nextProvider i18n={i18n}>{createElement(EditorComponent, props)}</I18nextProvider>;
}

export { editor, store, getRawValue, getHTML } from './components/Editor';
export { i18n } from './i18n';
