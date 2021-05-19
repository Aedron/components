import * as React from 'react';
import {
  ELEMENT_BLOCKQUOTE,
  ELEMENT_CODE_BLOCK,
  ELEMENT_H1,
  ELEMENT_H2,
  ELEMENT_H3,
  ELEMENT_H4,
  ELEMENT_H5,
  ELEMENT_H6,
  ToolbarCodeBlock,
  ToolbarElement,
  ToolbarImage,
  ToolbarLink,
  useSlatePluginType,
} from '@udecode/slate-plugins';
import {
  MdFormatQuote,
  MdImage,
  MdLink,
  MdLooks3,
  MdLooks4,
  MdLooks5,
  MdLooks6,
  MdLooksOne,
  MdLooksTwo,
} from 'react-icons/md';
import { BiCodeBlock } from 'react-icons/bi';
import { uploadImage } from '../../utils';

export function ToolbarButtonsBasicElements() {
  return (
    <>
      <ToolbarElement type={useSlatePluginType(ELEMENT_BLOCKQUOTE)} icon={<MdFormatQuote />} />
      <ToolbarLink icon={<MdLink />} />
      <ToolbarCodeBlock type={useSlatePluginType(ELEMENT_CODE_BLOCK)} icon={<BiCodeBlock />} />
      <ToolbarImage icon={<MdImage />} getImageUrl={uploadImage} />
      <span className="vize-richtext-toolbar-split-line" />
      <ToolbarElement type={useSlatePluginType(ELEMENT_H1)} icon={<MdLooksOne />} />
      <ToolbarElement type={useSlatePluginType(ELEMENT_H2)} icon={<MdLooksTwo />} />
      <ToolbarElement type={useSlatePluginType(ELEMENT_H3)} icon={<MdLooks3 />} />
      <ToolbarElement type={useSlatePluginType(ELEMENT_H4)} icon={<MdLooks4 />} />
      <ToolbarElement type={useSlatePluginType(ELEMENT_H5)} icon={<MdLooks5 />} />
      <ToolbarElement type={useSlatePluginType(ELEMENT_H6)} icon={<MdLooks6 />} />
    </>
  );
}
