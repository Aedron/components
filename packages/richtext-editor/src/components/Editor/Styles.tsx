import * as React from 'react';
import { memo } from 'react';

import frameStyles from './index.iframe.scss';
import contentStyle from '../../styles/content.iframe.scss';
import tooltipStyle from '../../styles/tooltip.iframe.scss';

interface Props {
  iframeStyles?: { [key: string]: string };
}

function IStyles({ iframeStyles }: Props) {
  return (
    <>
      <style type="text/css">{frameStyles}</style>
      <style type="text/css">{contentStyle}</style>
      <style type="text/css">{tooltipStyle}</style>

      {Object.entries(iframeStyles || {}).map(([k, v]) => (
        <style type="text/css" key={k} className={`iframe-style-${k}`}>
          {v}
        </style>
      ))}
    </>
  );
}

export const Styles = memo(IStyles);
