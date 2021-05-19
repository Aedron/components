import * as React from 'react';
import { useMemo, useState } from 'react';
import {
  ELEMENT_H1,
  ELEMENT_IMAGE,
  ELEMENT_PARAGRAPH,
  HeadingToolbar,
  SlatePlugin,
  SlatePlugins,
  ToolbarSearchHighlight,
  createDeserializeHTMLPlugin,
  deserializeHTMLToDocumentFragment,
  useFindReplacePlugin,
  SPEditor,
  TDescendant,
} from '@udecode/slate-plugins';
import { MdSearch } from 'react-icons/md';
import { initialValueEmpty, editableProps } from '../../libs';
import { ToolbarButtons } from '../ToolBar';
import { WithFrame } from '../WithFrame';
import { TEditor, defaultPlugins, components, editor, options } from './options';
import { Styles } from './Styles';

interface Props {
  id?: string;
  wrapperClassName?: string;
  iframeStyles?: { [key: string]: string };
  initRawValue?: TDescendant[];
  initValue?: string;
}

export function Editor({ wrapperClassName, id, iframeStyles, initValue, initRawValue }: Props) {
  const [searchVisible, setSearchVisible] = useState(false);
  const { setSearch, plugin: searchHighlightPlugin } = useFindReplacePlugin();

  const plugins: SlatePlugin<TEditor>[] = useMemo(() => {
    const p = [...defaultPlugins, searchHighlightPlugin];
    p.push(createDeserializeHTMLPlugin({ plugins: p }) as any);
    return p;
  }, [searchHighlightPlugin]);

  const initialValue = useMemo(() => {
    if (initRawValue) {
      return initRawValue;
    }
    if (initValue) {
      return deserializeHTMLToDocumentFragment(editor, {
        plugins,
        element: initValue,
      });
    }
    return initialValueEmpty;
  }, [initValue, initRawValue]);

  return (
    <WithFrame className={wrapperClassName}>
      <Styles iframeStyles={iframeStyles} />
      <SlatePlugins<TEditor>
        id={id || 'vize-component-richtext-editor'}
        plugins={plugins}
        components={components}
        options={options}
        editor={editor}
        editableProps={editableProps}
        initialValue={initialValue}
      >
        <HeadingToolbar>
          <ToolbarButtons searchVisible={searchVisible} setSearchVisible={setSearchVisible} />
        </HeadingToolbar>

        {searchVisible && <ToolbarSearchHighlight icon={MdSearch} setSearch={setSearch} />}

        <hr className="vize-component-richtext-editor-toolbar-split-line" />
      </SlatePlugins>
      <hr className="vize-component-richtext-editor-toolbar-split-line" />
    </WithFrame>
  );
}

export { slatePluginsStore as store } from '@udecode/slate-plugins';
export { editor } from './options';
export { getRawValue, getHTML } from './utils';
