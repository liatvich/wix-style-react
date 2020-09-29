import * as React from 'react';

export interface CardFolderTabProps {
  id: string;
  children: React.ReactNode;
  isDisabled?: boolean;
}

export default class CardFolderTab extends React.PureComponent<CardFolderTabProps>{}
