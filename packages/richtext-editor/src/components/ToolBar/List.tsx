import * as React from 'react';
import { ELEMENT_OL, ELEMENT_UL, ToolbarList, useSlatePluginType } from '@udecode/slate-plugins';
import { MdFormatListBulleted, MdFormatListNumbered } from 'react-icons/md';

export function ToolbarButtonsList() {
  return (
    <>
      <ToolbarList type={useSlatePluginType(ELEMENT_UL)} icon={<MdFormatListBulleted />} />
      <ToolbarList type={useSlatePluginType(ELEMENT_OL)} icon={<MdFormatListNumbered />} />
    </>
  );
}
