import * as React from 'react';
import {
  ELEMENT_ALIGN_CENTER,
  ELEMENT_ALIGN_JUSTIFY,
  ELEMENT_ALIGN_RIGHT,
  ToolbarAlign,
  useSlatePluginType,
} from '@udecode/slate-plugins';
import { MdFormatAlignCenter, MdFormatAlignJustify, MdFormatAlignLeft, MdFormatAlignRight } from 'react-icons/md';
import Tooltip from 'antd/lib/tooltip';
import { i18n } from '../../i18n';

export function ToolbarButtonsAlign() {
  return (
    <>
      <ToolbarAlign
        icon={
          <Tooltip title={i18n.t('align left')}>
            <MdFormatAlignLeft />
          </Tooltip>
        }
      />

      <ToolbarAlign
        type={useSlatePluginType(ELEMENT_ALIGN_CENTER)}
        icon={
          <Tooltip title={i18n.t('align center')}>
            <MdFormatAlignCenter />
          </Tooltip>
        }
      />

      <ToolbarAlign
        type={useSlatePluginType(ELEMENT_ALIGN_RIGHT)}
        icon={
          <Tooltip title={i18n.t('align right')}>
            <MdFormatAlignRight />
          </Tooltip>
        }
      />

      <ToolbarAlign
        type={useSlatePluginType(ELEMENT_ALIGN_JUSTIFY)}
        icon={
          <Tooltip title={i18n.t('align justify')}>
            <MdFormatAlignJustify />
          </Tooltip>
        }
      />
    </>
  );
}
