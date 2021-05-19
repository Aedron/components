import * as React from 'react';
import {
  ELEMENT_BLOCKQUOTE,
  ELEMENT_CODE_BLOCK,
  ToolbarCodeBlock,
  ToolbarElement,
  ToolbarImage,
  ToolbarLink,
  useSlatePluginType,
} from '@udecode/slate-plugins';
import { MdFormatQuote, MdImage, MdLink } from 'react-icons/md';
import { BiCodeBlock } from 'react-icons/bi';
import Tooltip from 'antd/lib/tooltip';
import { i18n } from '../../i18n';
import { uploadImage } from '../../utils';
import { memo } from 'react';

function IToolbarButtonsBasicElements() {
  return (
    <>
      <ToolbarElement
        type={useSlatePluginType(ELEMENT_BLOCKQUOTE)}
        icon={
          <Tooltip title={i18n.t('quote')}>
            <MdFormatQuote />
          </Tooltip>
        }
      />

      <ToolbarLink
        icon={
          <Tooltip title={i18n.t('link')}>
            <MdLink />
          </Tooltip>
        }
      />

      <ToolbarCodeBlock
        type={useSlatePluginType(ELEMENT_CODE_BLOCK)}
        icon={
          <Tooltip title={i18n.t('code block')}>
            <BiCodeBlock />
          </Tooltip>
        }
      />
      <ToolbarImage
        icon={
          <Tooltip title={i18n.t('image')}>
            <MdImage />
          </Tooltip>
        }
        getImageUrl={uploadImage}
      />
    </>
  );
}

export const ToolbarButtonsBasicElements = memo(IToolbarButtonsBasicElements);
