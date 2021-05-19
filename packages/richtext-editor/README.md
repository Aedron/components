# @vize/richtext-editor

A richtext editor React component using in project [vize](https://github.com/vize-team/vize)

## Preview

![](https://gw.alicdn.com/imgextra/i4/O1CN01Fg1lfa1gUulfB5DEc_!!6000000004146-0-tps-1630-1354.jpg)

## Install

```bash
npm install @vize/richtext-editor @udecode/slate-plugins slate slate-history slate-hyperscript slate-react
```

## Usage

```tsx
import { Editor, getRawValue, getHTML } from '@vize/richtext-editor';

function App() {
  return (
    <>
      <button onClick={() => console.log(getHTML())}>print html</button>
      <button onClick={() => console.log(getRawValue())}>print raw value</button>
      <Editor wrapperClassName="my-editor" initValue="<h1>hello</h1>" />
    </>
  );
}
```
