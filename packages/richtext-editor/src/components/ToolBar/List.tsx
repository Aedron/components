import * as React from 'react';
import { memo } from 'react';
import { ELEMENT_OL, ELEMENT_UL, ToolbarList, useSlatePluginType } from '@udecode/slate-plugins';
import { MdFormatListBulleted, MdFormatListNumbered } from 'react-icons/md';
import Tooltip from 'antd/lib/tooltip';
import { i18n } from '../../i18n';

function IToolbarButtonsList() {
  return (
    <>
      <ToolbarList
        type={useSlatePluginType(ELEMENT_UL)}
        icon={
          <Tooltip trigger="hover" title={i18n.t('unordered list')}>
            <MdFormatListBulleted />
          </Tooltip>
        }
      />

      <ToolbarList
        type={useSlatePluginType(ELEMENT_OL)}
        icon={
          <Tooltip trigger="hover" title={i18n.t('ordered list')}>
            <MdFormatListNumbered />
          </Tooltip>
        }
      />
    </>
  );
}

export const ToolbarButtonsList = memo(IToolbarButtonsList);
