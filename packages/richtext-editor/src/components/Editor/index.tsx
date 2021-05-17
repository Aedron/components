import './index.scss';
import * as React from 'react';
import { useMemo } from 'react';
import {
  ELEMENT_H1,
  ELEMENT_IMAGE,
  ELEMENT_PARAGRAPH,
  createSlatePluginsComponents,
  createSlatePluginsOptions,
  HeadingToolbar,
  SlatePlugin,
  SlatePlugins,
  ToolbarSearchHighlight,
  createAlignPlugin,
  createAutoformatPlugin,
  createBlockquotePlugin,
  createBoldPlugin,
  createCodeBlockPlugin,
  createCodePlugin,
  createExitBreakPlugin,
  createHeadingPlugin,
  createHighlightPlugin,
  createHistoryPlugin,
  createKbdPlugin,
  createImagePlugin,
  createItalicPlugin,
  createLinkPlugin,
  createListPlugin,
  createMediaEmbedPlugin,
  createNodeIdPlugin,
  createNormalizeTypesPlugin,
  createParagraphPlugin,
  createReactPlugin,
  createResetNodePlugin,
  createSelectOnBackspacePlugin,
  createSoftBreakPlugin,
  createStrikethroughPlugin,
  createSubscriptPlugin,
  createSuperscriptPlugin,
  createTablePlugin,
  createTodoListPlugin,
  createTrailingBlockPlugin,
  createUnderlinePlugin,
  createDeserializeHTMLPlugin,
  useFindReplacePlugin,
  SPEditor,
} from '@udecode/slate-plugins';
import { HistoryEditor } from 'slate-history';
import { ReactEditor } from 'slate-react';
import { MdSearch } from 'react-icons/md';
import {
  optionsAutoformat,
  initialValueEmpty,
  editableProps,
  optionsExitBreakPlugin,
  optionsResetBlockTypePlugin,
  optionsSoftBreakPlugin,
  withStyledPlaceHolders,
} from '../../libs';
import { BallonToolbarMarks, ToolbarButtons } from '../ToolBar';
import { WithFrame } from '../WithFrame';

type TEditor = SPEditor & ReactEditor & HistoryEditor;

const components = withStyledPlaceHolders(createSlatePluginsComponents({}));

const options = createSlatePluginsOptions({});

interface Props {
  id?: string;
  wrapperClassName?: string;
}

export const RichTextEditor = ({ wrapperClassName, id }: Props) => {
  const { setSearch, plugin: searchHighlightPlugin } = useFindReplacePlugin();

  const plugins: SlatePlugin<TEditor>[] = useMemo(() => {
    const p = [
      createReactPlugin(),
      createHistoryPlugin(),
      createParagraphPlugin(),
      createBlockquotePlugin(),
      createTodoListPlugin(),
      createHeadingPlugin(),
      createImagePlugin(),
      createLinkPlugin(),
      createListPlugin(),
      createTablePlugin(),
      createMediaEmbedPlugin(),
      createCodeBlockPlugin(),
      createAlignPlugin(),
      createBoldPlugin(),
      createCodePlugin(),
      createItalicPlugin(),
      createHighlightPlugin(),
      createUnderlinePlugin(),
      createStrikethroughPlugin(),
      createSubscriptPlugin(),
      createSuperscriptPlugin(),
      createKbdPlugin(),
      createNodeIdPlugin(),
      createAutoformatPlugin(optionsAutoformat),
      createResetNodePlugin(optionsResetBlockTypePlugin),
      createSoftBreakPlugin(optionsSoftBreakPlugin),
      createExitBreakPlugin(optionsExitBreakPlugin),
      // createNormalizeTypesPlugin({
      //   rules: [{ path: [0, 0], strictType: options[ELEMENT_H1].type }],
      // }),
      createTrailingBlockPlugin({
        type: options[ELEMENT_PARAGRAPH].type,
        level: 1,
      }),
      createSelectOnBackspacePlugin({ allow: options[ELEMENT_IMAGE].type }),
      searchHighlightPlugin,
    ];

    p.push(createDeserializeHTMLPlugin({ plugins: p }) as any);

    return p;
  }, [searchHighlightPlugin]);

  return (
    // <WithFrame className={wrapperClassName}>
    <SlatePlugins
      id={id || 'vize-component-richtext-editor'}
      plugins={plugins}
      components={components}
      options={options}
      editableProps={editableProps}
      initialValue={initialValueEmpty}
    >
      <ToolbarSearchHighlight icon={MdSearch} setSearch={setSearch} />

      <HeadingToolbar>
        <ToolbarButtons />
      </HeadingToolbar>

      <BallonToolbarMarks />
    </SlatePlugins>
    // </WithFrame>
  );
};
