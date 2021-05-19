import { slatePluginsStore as store, TDescendant, serializeHTMLFromNodes } from '@udecode/slate-plugins';
import { defaultPlugins, editor } from './options';

export function getRawValue(id = 'vize-component-richtext-editor'): TDescendant[] {
  return store.getState()[id]?.value;
}

export function getHTML(id = 'vize-component-richtext-editor') {
  return serializeHTMLFromNodes(editor, {
    nodes: getRawValue(id),
    plugins: defaultPlugins,
  });
}
