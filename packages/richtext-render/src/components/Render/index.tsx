import * as React from 'react';
import { forwardRef, MutableRefObject } from 'react';
import { CSSProperties } from 'react';
import '../../libs/element';

export interface RenderProps {
  content: string;
  style?: CSSProperties;
}

function IRender(
  { content, style }: RenderProps,
  ref: ((instance: HTMLDivElement | null) => void) | MutableRefObject<HTMLDivElement | null> | null,
) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return <vize-rich-text content={content} style={style} ref={ref} />;
}

export const Render = forwardRef(IRender);
