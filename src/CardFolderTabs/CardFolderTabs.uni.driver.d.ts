import { BaseUniDriver } from 'wix-ui-test-utils/unidriver';

export interface CardFolderTabsUniDriver extends BaseUniDriver {
  getButtonTextContent(buttonIndex: string): Promise<string>;
  getIsFocused(buttonIndex: string): Promise<boolean>;
  getIsButtonDisabled(buttonIndex: string): Promise<boolean>;
  selectTab(tabIndex: string): Promise<string>;
  getCurrentTabTextContent(): Promise<string>;
}
