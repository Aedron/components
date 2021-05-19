import './index.scss';
import * as React from 'react';
import { render } from 'react-dom';
import { Editor, store, getRawValue } from './lib';

const initValue = JSON.parse(
  '[{"type":"p","children":[{"text":"This example shows how to enforce your layout with domain-specific constraints. This document will always have a title block at the top and a trailing paragraph. Try deleting them and see what happens!"}]},{"type":"p","children":[{"text":"Slate editors can edit complex, nested data structures. And for the most part this is great. But in certain cases inconsistencies in the data structure can be introduced—most often when allowing a user to paste arbitrary richtext content."}]},{"type":"p","children":[{"text":"\\\\\\"Normalizing\\\\\\" is how you can ensure that your editor\'s content is always of a certain shape. It\'s similar to \\\\\\"validating\\\\\\", except instead of just determining whether the content is valid or invalid, its job is to fix the content to make it valid again."}]},{"type":"h1","children":[{"text":"💅 Marks"}]},{"type":"h2","children":[{"text":"💧 Basic Marks"}]},{"type":"p","children":[{"text":"The basic marks consist of text formatting such as bold, italic, underline, strikethrough, subscript, superscript, and code."}]},{"type":"p","children":[{"text":"You can customiz"}]},{"type":"p","children":[{"text":""}]}]',
);

function Example() {
  return (
    <>
      <button
        onClick={() => {
          console.log(store, JSON.stringify(getRawValue()));
        }}
      >
        print
      </button>
      <Editor wrapperClassName="example-editor" initRawValue={initValue} />
    </>
  );
}

render(<Example />, document.getElementById('root'));
