import * as React from 'react';
import { forwardRef } from 'react';
import { CSSProperties } from 'react';
import '../../libs/element';

export interface RenderProps {
  content: string;
  style?: CSSProperties;
}

function IRender({ content, style }: RenderProps) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return <vize-rich-text content={content} style={style} />;
}

export const Render = forwardRef(IRender);
