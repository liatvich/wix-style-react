import * as React from 'react';

export interface CardFolderTabProps {
  id: string;
  children: React.ReactNode;
  name: string;
  disabled?: boolean;
}

export default class CardFolderTab extends React.PureComponent<
  CardFolderTabProps
> {}
