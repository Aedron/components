import { ELEMENT_H1, ELEMENT_PARAGRAPH, withPlaceholders } from '@udecode/slate-plugins';

export const withStyledPlaceHolders = (components: any) =>
  withPlaceholders(components, [
    {
      key: ELEMENT_PARAGRAPH,
      placeholder: 'Enter some texts...',
      hideOnBlur: true,
    },
  ]);
