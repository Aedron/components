import * as React from 'react';
import { useCallback } from 'react';
import { MdSearch } from 'react-icons/md';

export interface SearchProps {
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
