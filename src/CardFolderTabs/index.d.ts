import * as React from 'react';

export interface CardFolderTabsProps {
  dataHook?: string;
  activeId: string;
  onTabChange?: (newActiveId: string) => any;
  maxTabWidth?: number;
}

export default class CardFolderTabs extends React.PureComponent<CardFolderTabsProps>{}
