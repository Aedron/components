import 'antd/lib/tooltip/style/index.css';
import * as React from 'react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import {
  HeadingToolbar,
  SlatePlugin,
  SlatePlugins,
  ToolbarSearchHighlight,
  createDeserializeHTMLPlugin,
  deserializeHTMLToDocumentFragment,
  useFindReplacePlugin,
  TDescendant,
} from '@udecode/slate-plugins';
import { MdSearch } from 'react-icons/md';
import { initialValueEmpty, editableProps } from '../../libs';
import { ToolbarButtons } from '../ToolBar';
import { WithFrame } from '../WithFrame';
import { TEditor, defaultPlugins, components, editor, options } from './options';
import { Styles } from './Styles';
import styles from './index.scss';

interface Props {
  id?: string;
  wrapperClassName?: string;
  iframeStyles?: { [key: string]: string };
  initRawValue?: TDescendant[];
  initValue?: string;
}

export function Editor({ wrapperClassName, id, iframeStyles, initValue, initRawValue }: Props) {
  const entry = useRef<HTMLDivElement>(null);
  const [toolbarVisible, setToolbarVisible] = useState(false);
  const [searchVisible, setSearchVisible] = useState(true);
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

  useEffect(() => {
    setToolbarVisible(!!entry.current);
  }, [entry.current]);

  return (
    <>
      <div ref={entry} />
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
          {toolbarVisible &&
            createPortal(
              <>
                <HeadingToolbar>
                  <ToolbarButtons searchVisible={searchVisible} setSearchVisible={setSearchVisible} />
                </HeadingToolbar>
                {searchVisible && <ToolbarSearchHighlight icon={MdSearch} setSearch={setSearch} />}
              </>,
              entry.current!,
            )}

          <hr className="vize-component-richtext-editor-toolbar-split-line" />
        </SlatePlugins>
        <hr className="vize-component-richtext-editor-toolbar-split-line" />
      </WithFrame>
      <style type="text/css">{styles}</style>
    </>
  );
}

export { slatePluginsStore as store } from '@udecode/slate-plugins';
export { editor } from './options';
export { getRawValue, getHTML } from './utils';
