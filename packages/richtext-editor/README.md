# @vize/richtext-editor

A richtext editor React component using in project [vize](https://github.com/vize-team/vize)

## Preview

![](https://gw.alicdn.com/imgextra/i2/O1CN01z4BHTN1jMcRSovP5l_!!6000000004534-0-tps-1134-952.jpg)

## Install

```bash
npm install @vize/richtext-editor
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
