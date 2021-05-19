import * as React from 'react';
import {
  MARK_BOLD,
  MARK_CODE,
  MARK_ITALIC,
  MARK_KBD,
  MARK_STRIKETHROUGH,
  MARK_SUBSCRIPT,
  MARK_SUPERSCRIPT,
  MARK_UNDERLINE,
  ToolbarMark,
  useSlatePluginType,
} from '@udecode/slate-plugins';
import {
  MdCode,
  MdFormatBold,
  MdFormatItalic,
  MdFormatStrikethrough,
  MdFormatUnderlined,
  MdKeyboard,
} from 'react-icons/md';
import { ImSubscript, ImSuperscript } from 'react-icons/im';

export function ToolbarButtonsBasicMarks() {
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
}
