import * as React from 'react';
import { memo } from 'react';
import { ToolbarButtonsBasicElements } from './BasicElements';
import { ToolbarButtonsBasicMarks } from './BasicMarks';
import { ToolbarButtonsList } from './List';
import { ToolbarButtonsAlign } from './Align';
import { ToolbarButtonSearch, SearchProps } from './Search';

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
    </>
  );
}

export const ToolbarButtons = memo(IToolbarButtons);
