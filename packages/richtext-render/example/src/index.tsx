import './index.scss';
import * as React from 'react';
import { render } from 'react-dom';
import { Render } from './lib';
import { useEffect, useState } from 'react';

const content = `<div>
    <h1>Hello</h1>
</div>`;

function Example() {
  const [html, setHTML] = useState(content);

  useEffect(() => {
    (window as any).setContent = setHTML;
  }, []);

  console.log(html);

  return <Render content={html} />;
}

render(<Example />, document.getElementById('root'));
