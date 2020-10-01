import * as React from 'react';

export interface CardFolderTabsProps {
  dataHook?: string;
  activeId: string;
  onTabChange?: (newActiveId: string) => void;
  maxTabWidth?: React.CSSProperties['maxWidth'];
}

export default class CardFolderTabs extends React.PureComponent<
  CardFolderTabsProps
> {}
