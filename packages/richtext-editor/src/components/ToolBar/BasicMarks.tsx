import 'antd/lib/tooltip/style';
import * as React from 'react';
import { memo } from 'react';
import {
  MARK_BOLD,
  MARK_CODE,
  MARK_ITALIC,
  MARK_KBD,
  MARK_STRIKETHROUGH,
  MARK_SUBSCRIPT,
  MARK_SUPERSCRIPT,
  MARK_UNDERLINE,
  ToolbarMark,
  useSlatePluginType,
} from '@udecode/slate-plugins';
import {
  MdCode,
  MdFormatBold,
  MdFormatItalic,
  MdFormatStrikethrough,
  MdFormatUnderlined,
  MdKeyboard,
} from 'react-icons/md';
import { ImSubscript, ImSuperscript } from 'react-icons/im';
import Tooltip from 'antd/lib/tooltip';
import { i18n } from '../../i18n';

function IToolbarButtonsBasicMarks() {
  return (
    <>
      <ToolbarMark
        type={useSlatePluginType(MARK_BOLD)}
        icon={
          <Tooltip trigger="hover" title={i18n.t('bold')}>
            <MdFormatBold />
          </Tooltip>
        }
      />

      <ToolbarMark
        type={useSlatePluginType(MARK_ITALIC)}
        icon={
          <Tooltip trigger="hover" title={i18n.t('italic')}>
            <MdFormatItalic />
          </Tooltip>
        }
      />

      <ToolbarMark
        type={useSlatePluginType(MARK_UNDERLINE)}
        icon={
          <Tooltip trigger="hover" title={i18n.t('underline')}>
            <MdFormatUnderlined />
          </Tooltip>
        }
      />
      <ToolbarMark
        type={useSlatePluginType(MARK_STRIKETHROUGH)}
        icon={
          <Tooltip trigger="hover" title={i18n.t('strike through')}>
            <MdFormatStrikethrough />
          </Tooltip>
        }
      />

      <ToolbarMark
        type={useSlatePluginType(MARK_CODE)}
        icon={
          <Tooltip trigger="hover" title={i18n.t('code')}>
            <MdCode />
          </Tooltip>
        }
      />

      <ToolbarMark
        type={useSlatePluginType(MARK_KBD)}
        icon={
          <Tooltip trigger="hover" title="keyboard">
            <MdKeyboard />
          </Tooltip>
        }
      />

      <ToolbarMark
        type={useSlatePluginType(MARK_SUPERSCRIPT)}
        clear={useSlatePluginType(MARK_SUBSCRIPT)}
        icon={
          <Tooltip trigger="hover" title={i18n.t('superscript')}>
            <ImSuperscript />
          </Tooltip>
        }
      />

      <ToolbarMark
        type={useSlatePluginType(MARK_SUBSCRIPT)}
        clear={useSlatePluginType(MARK_SUPERSCRIPT)}
        icon={
          <Tooltip trigger="hover" title={i18n.t('subscript')}>
            <ImSubscript />
          </Tooltip>
        }
      />
    </>
  );
}

export const ToolbarButtonsBasicMarks = memo(IToolbarButtonsBasicMarks);
