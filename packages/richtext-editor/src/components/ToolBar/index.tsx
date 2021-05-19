import * as React from 'react';
import { memo } from 'react';
import { ToolbarButtonsBasicElements } from './BasicElements';
import { ToolbarButtonsBasicMarks } from './BasicMarks';
import { ToolbarButtonsList } from './List';
import { ToolbarButtonsAlign } from './Align';
import { ToolbarButtonSearch, SearchProps } from './Search';
import { Header } from './Head';

type Props = SearchProps;

function IToolbarButtons({ searchVisible, setSearchVisible }: Props) {
  return (
    <>
      <ToolbarButtonsBasicMarks />
      <span className="vize-component-richtext-toolbar-split-line" />
      <ToolbarButtonsList />
      <ToolbarButtonsBasicElements />
      <span className="vize-component-richtext-toolbar-split-line" />
      <Header />
      <span className="vize-component-richtext-toolbar-split-line" />
      <ToolbarButtonsAlign />
      <span className="vize-component-richtext-toolbar-split-line" />
      <ToolbarButtonSearch searchVisible={searchVisible} setSearchVisible={setSearchVisible} />
    </>
  );
}

export const ToolbarButtons = memo(IToolbarButtons);
