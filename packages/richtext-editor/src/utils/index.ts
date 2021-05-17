import { ELEMENT_LI, ELEMENT_LIC, ELEMENT_PARAGRAPH, ELEMENT_UL } from '@udecode/slate-plugins';
import { Text, Element } from 'slate';

interface Leaf {
  text: string;
  [mark: string]: string | boolean;
}

export const getNodesWithRandomId = (nodes: any[]) => {
  debugger;
  let _id = 10000;
  nodes.forEach(node => {
    node.id = _id;
    _id++;
  });

  return nodes;
};
