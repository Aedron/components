import * as React from 'react';
import { memo } from 'react';
import {
  ELEMENT_H1,
  ELEMENT_H2,
  ELEMENT_H3,
  ELEMENT_H4,
  ELEMENT_H5,
  ELEMENT_H6,
  ToolbarElement,
  useSlatePluginType,
} from '@udecode/slate-plugins';
import { MdLooks3, MdLooks4, MdLooks5, MdLooks6, MdLooksOne, MdLooksTwo } from 'react-icons/md';
import Tooltip from 'antd/lib/tooltip';
import { i18n } from '../../i18n';

function IHeader() {
  return (
    <>
      <ToolbarElement
        type={useSlatePluginType(ELEMENT_H1)}
        icon={
          <Tooltip trigger="hover" title={i18n.t('heading') + ' 1'}>
            <MdLooksOne />
          </Tooltip>
        }
      />

      <ToolbarElement
        type={useSlatePluginType(ELEMENT_H2)}
        icon={
          <Tooltip trigger="hover" title={i18n.t('heading') + ' 2'}>
            <MdLooksTwo />
          </Tooltip>
        }
      />

      <ToolbarElement
        type={useSlatePluginType(ELEMENT_H3)}
        icon={
          <Tooltip trigger="hover" title={i18n.t('heading') + ' 3'}>
            <MdLooks3 />
          </Tooltip>
        }
      />

      <ToolbarElement
        type={useSlatePluginType(ELEMENT_H4)}
        icon={
          <Tooltip trigger="hover" title={i18n.t('heading') + ' 4'}>
            <MdLooks4 />
          </Tooltip>
        }
      />

      <ToolbarElement
        type={useSlatePluginType(ELEMENT_H5)}
        icon={
          <Tooltip trigger="hover" title={i18n.t('heading') + ' 5'}>
            <MdLooks5 />
          </Tooltip>
        }
      />

      <ToolbarElement
        type={useSlatePluginType(ELEMENT_H6)}
        icon={
          <Tooltip trigger="hover" title={i18n.t('heading') + ' 6'}>
            <MdLooks6 />
          </Tooltip>
        }
      />
    </>
  );
}

export const Header = memo(IHeader);
