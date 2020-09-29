import { buttonNextDriverFactory } from 'wix-ui-core/dist/src/components/button-next/button-next.uni.driver';

import {
  baseUniDriverFactory,
  findByHook,
  findByHookAtIndex,
} from '../../test/utils/unidriver';
import { dataHooks } from './constants';

export const cardFolderTabsDriverFactory = base => {
  const getButtonByIndex = buttonIndex =>
    findByHookAtIndex(base, dataHooks.tabButton, buttonIndex);

  return {
    ...baseUniDriverFactory(base),

    /**
     * Gets button text
     * @return {Promise<string>}
     */
    getButtonTextContent: buttonIndex =>
      buttonNextDriverFactory(getButtonByIndex(buttonIndex))
        .getButtonTextContent,

    /**
     * Checks whether button is focused
     * @return {Promise<boolean>}
     */
    getIsFocused: buttonIndex =>
      buttonNextDriverFactory(getButtonByIndex(buttonIndex)).isFocused,

    /**
     * Checks whether button is disabled
     * @return {Promise<boolean>}
     */
    getIsButtonDisabled: buttonIndex => getButtonByIndex(buttonIndex).disabled,

    /**
     * Selects tab by tab index
     * @return {Promise<void>}
     */
    selectTab: tabIndex => getButtonByIndex(tabIndex).click(),

    /**
     * Returns currently selected tab text content
     * @return {Promise<string>}
     */
    getCurrentTabTextContent: () => findByHook(base, dataHooks.content).text(),
  };
};
