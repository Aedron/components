import './index.scss';
import * as React from 'react';
import { render } from 'react-dom';
import { RichTextEditor } from './lib';

function Example() {
  return (
    <>
      <RichTextEditor wrapperClassName="example-editor" />
    </>
  );
}

render(<Example />, document.getElementById('root'));
