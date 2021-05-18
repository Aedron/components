import {
  createSlatePluginsComponents,
  createSlatePluginsOptions,
  createEditorPlugins,
  createReactPlugin,
  createHistoryPlugin,
  createParagraphPlugin,
  createBlockquotePlugin,
  createTodoListPlugin,
  createHeadingPlugin,
  createImagePlugin,
  createLinkPlugin,
  createListPlugin,
  createTablePlugin,
  createMediaEmbedPlugin,
  createCodeBlockPlugin,
  createAlignPlugin,
  createBoldPlugin,
  createCodePlugin,
  createItalicPlugin,
  createHighlightPlugin,
  createUnderlinePlugin,
  createStrikethroughPlugin,
  createSubscriptPlugin,
  createSuperscriptPlugin,
  createKbdPlugin,
  createNodeIdPlugin,
  createAutoformatPlugin,
  createResetNodePlugin,
  createSoftBreakPlugin,
  createExitBreakPlugin,
  createTrailingBlockPlugin,
  ELEMENT_PARAGRAPH,
  createSelectOnBackspacePlugin,
  ELEMENT_IMAGE,
  SPEditor,
} from '@udecode/slate-plugins';
import { ReactEditor } from 'slate-react';
import { HistoryEditor } from 'slate-history';
import {
  optionsAutoformat,
  optionsExitBreakPlugin,
  optionsResetBlockTypePlugin,
  optionsSoftBreakPlugin,
  withStyledPlaceHolders,
} from '../../libs';

export type TEditor = SPEditor & ReactEditor & HistoryEditor;

export const components = withStyledPlaceHolders(createSlatePluginsComponents({}));

export const editor = createEditorPlugins<TEditor>();

export const options = createSlatePluginsOptions({});

export const defaultPlugins = [
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
  createTrailingBlockPlugin({
    type: options[ELEMENT_PARAGRAPH].type,
    level: 1,
  }),
  createSelectOnBackspacePlugin({ allow: options[ELEMENT_IMAGE].type }),
];
