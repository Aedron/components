import * as React from 'react';
import {
  ELEMENT_ALIGN_CENTER,
  ELEMENT_ALIGN_JUSTIFY,
  ELEMENT_ALIGN_RIGHT,
  ToolbarAlign,
  useSlatePluginType,
} from '@udecode/slate-plugins';
import { MdFormatAlignCenter, MdFormatAlignJustify, MdFormatAlignLeft, MdFormatAlignRight } from 'react-icons/md';

export function ToolbarButtonsAlign() {
  return (
    <>
      <ToolbarAlign icon={<MdFormatAlignLeft />} />
      <ToolbarAlign type={useSlatePluginType(ELEMENT_ALIGN_CENTER)} icon={<MdFormatAlignCenter />} />
      <ToolbarAlign type={useSlatePluginType(ELEMENT_ALIGN_RIGHT)} icon={<MdFormatAlignRight />} />
      <ToolbarAlign type={useSlatePluginType(ELEMENT_ALIGN_JUSTIFY)} icon={<MdFormatAlignJustify />} />
    </>
  );
}
