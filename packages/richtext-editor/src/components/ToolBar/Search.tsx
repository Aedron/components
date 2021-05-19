import * as React from 'react';
import { memo, useCallback } from 'react';
import { MdSearch } from 'react-icons/md';
import Tooltip from 'antd/lib/tooltip';
import { i18n } from '../../i18n';

export interface SearchProps {
  searchVisible: boolean;
  setSearchVisible: (v: boolean | ((v: boolean) => boolean)) => void;
}

function IToolbarButtonSearch({ searchVisible, setSearchVisible }: SearchProps) {
  const onClick = useCallback(() => setSearchVisible(i => !i), []);
  return (
    <Tooltip title={i18n.t('search')}>
      <span className={`slate-ToolbarButton${searchVisible ? ' slate-ToolbarButton-active' : ''}`} onClick={onClick}>
        <MdSearch />
      </span>
    </Tooltip>
  );
}

export const ToolbarButtonSearch = memo(IToolbarButtonSearch);
