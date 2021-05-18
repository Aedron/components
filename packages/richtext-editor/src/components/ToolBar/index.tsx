import React, { memo, useCallback } from 'react';
import {
  addColumn,
  addRow,
  deleteColumn,
  deleteRow,
  deleteTable,
  ELEMENT_ALIGN_CENTER,
  ELEMENT_ALIGN_JUSTIFY,
  ELEMENT_ALIGN_RIGHT,
  ELEMENT_BLOCKQUOTE,
  ELEMENT_CODE_BLOCK,
  ELEMENT_H1,
  ELEMENT_H2,
  ELEMENT_H3,
  ELEMENT_H4,
  ELEMENT_H5,
  ELEMENT_H6,
  ELEMENT_OL,
  ELEMENT_UL,
  insertTable,
  MARK_BOLD,
  MARK_CODE,
  MARK_ITALIC,
  MARK_KBD,
  MARK_STRIKETHROUGH,
  MARK_SUBSCRIPT,
  MARK_SUPERSCRIPT,
  MARK_UNDERLINE,
  ToolbarAlign,
  ToolbarCodeBlock,
  ToolbarElement,
  ToolbarList,
  ToolbarMark,
  ToolbarTable,
  ToolbarLink,
  ToolbarImage,
  useSlatePluginType,
} from '@udecode/slate-plugins';
import {
  MdCode,
  MdImage,
  MdBorderAll,
  MdBorderBottom,
  MdBorderClear,
  MdBorderLeft,
  MdBorderRight,
  MdBorderTop,
  MdFormatAlignCenter,
  MdFormatAlignJustify,
  MdFormatAlignLeft,
  MdFormatAlignRight,
  MdFormatBold,
  MdFormatItalic,
  MdFormatListBulleted,
  MdFormatListNumbered,
  MdFormatQuote,
  MdFormatStrikethrough,
  MdFormatUnderlined,
  MdKeyboard,
  MdLooks3,
  MdLooks4,
  MdLooks5,
  MdLooks6,
  MdLooksOne,
  MdLooksTwo,
  MdLink,
  MdSearch,
} from 'react-icons/md';
import { BiCodeBlock } from 'react-icons/bi';
import { ImSubscript, ImSuperscript } from 'react-icons/im';

export const ToolbarButtonsBasicElements = () => (
  <>
    <ToolbarElement type={useSlatePluginType(ELEMENT_BLOCKQUOTE)} icon={<MdFormatQuote />} />
    <ToolbarLink icon={<MdLink />} />
    <ToolbarCodeBlock type={useSlatePluginType(ELEMENT_CODE_BLOCK)} icon={<BiCodeBlock />} />
    <ToolbarImage icon={<MdImage />} />
    <ToolbarElement type={useSlatePluginType(ELEMENT_H1)} icon={<MdLooksOne />} />
    <ToolbarElement type={useSlatePluginType(ELEMENT_H2)} icon={<MdLooksTwo />} />
    <ToolbarElement type={useSlatePluginType(ELEMENT_H3)} icon={<MdLooks3 />} />
    <ToolbarElement type={useSlatePluginType(ELEMENT_H4)} icon={<MdLooks4 />} />
    <ToolbarElement type={useSlatePluginType(ELEMENT_H5)} icon={<MdLooks5 />} />
    <ToolbarElement type={useSlatePluginType(ELEMENT_H6)} icon={<MdLooks6 />} />
  </>
);

export const ToolbarButtonsList = () => (
  <>
    <ToolbarList type={useSlatePluginType(ELEMENT_UL)} icon={<MdFormatListBulleted />} />
    <ToolbarList type={useSlatePluginType(ELEMENT_OL)} icon={<MdFormatListNumbered />} />
  </>
);

export const ToolbarButtonsAlign = () => (
  <>
    <ToolbarAlign icon={<MdFormatAlignLeft />} />
    <ToolbarAlign type={useSlatePluginType(ELEMENT_ALIGN_CENTER)} icon={<MdFormatAlignCenter />} />
    <ToolbarAlign type={useSlatePluginType(ELEMENT_ALIGN_RIGHT)} icon={<MdFormatAlignRight />} />
    <ToolbarAlign type={useSlatePluginType(ELEMENT_ALIGN_JUSTIFY)} icon={<MdFormatAlignJustify />} />
  </>
);

export const ToolbarButtonsBasicMarks = () => {
  return (
    <>
      <ToolbarMark type={useSlatePluginType(MARK_BOLD)} icon={<MdFormatBold />} />
      <ToolbarMark type={useSlatePluginType(MARK_ITALIC)} icon={<MdFormatItalic />} />
      <ToolbarMark type={useSlatePluginType(MARK_UNDERLINE)} icon={<MdFormatUnderlined />} />
      <ToolbarMark type={useSlatePluginType(MARK_STRIKETHROUGH)} icon={<MdFormatStrikethrough />} />
      <ToolbarMark type={useSlatePluginType(MARK_CODE)} icon={<MdCode />} />
      <ToolbarMark type={useSlatePluginType(MARK_KBD)} icon={<MdKeyboard />} />
      <ToolbarMark
        type={useSlatePluginType(MARK_SUPERSCRIPT)}
        clear={useSlatePluginType(MARK_SUBSCRIPT)}
        icon={<ImSuperscript />}
      />
      <ToolbarMark
        type={useSlatePluginType(MARK_SUBSCRIPT)}
        clear={useSlatePluginType(MARK_SUPERSCRIPT)}
        icon={<ImSubscript />}
      />
    </>
  );
};

interface SearchProps {
  searchVisible: boolean;
  setSearchVisible: (v: boolean | ((v: boolean) => boolean)) => void;
}

export function ToolbarButtonSearch({ searchVisible, setSearchVisible }: SearchProps) {
  const onClick = useCallback(() => setSearchVisible(i => !i), []);
  return (
    <span className={`slate-ToolbarButton${searchVisible ? ' slate-ToolbarButton-active' : ''}`} onClick={onClick}>
      <MdSearch />
    </span>
  );
}

export function ToolbarButtonsTable() {
  return (
    <>
      <ToolbarTable icon={<MdBorderAll />} transform={insertTable} />
      <ToolbarTable icon={<MdBorderClear />} transform={deleteTable} />
      <ToolbarTable icon={<MdBorderBottom />} transform={addRow} />
      <ToolbarTable icon={<MdBorderTop />} transform={deleteRow} />
      <ToolbarTable icon={<MdBorderLeft />} transform={addColumn} />
      <ToolbarTable icon={<MdBorderRight />} transform={deleteColumn} />
    </>
  );
}

type Props = SearchProps;

function IToolbarButtons({ searchVisible, setSearchVisible }: Props) {
  return (
    <>
      <ToolbarButtonsBasicMarks />
      <span className="vize-richtext-toolbar-split-line" />
      <ToolbarButtonsList />
      <ToolbarButtonsBasicElements />
      <span className="vize-richtext-toolbar-split-line" />
      <ToolbarButtonsAlign />
      <span className="vize-richtext-toolbar-split-line" />
      <ToolbarButtonSearch searchVisible={searchVisible} setSearchVisible={setSearchVisible} />
      {/*<ToolbarButtonsTable />*/}
    </>
  );
}

export const ToolbarButtons = memo(IToolbarButtons);
