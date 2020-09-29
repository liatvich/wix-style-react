import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import CardFolderTabs from '../CardFolderTabs';
import { cardFolderTabsPrivateDriverFactory } from './CardFolderTabs.private.uni.driver';

describe(CardFolderTabs.displayName, () => {
  const render = createRendererWithUniDriver(
    cardFolderTabsPrivateDriverFactory,
  );

  afterEach(cleanup);

  it('should render', async () => {
    const { driver } = render(
      <CardFolderTabs activeId="tab-1">
        <CardFolderTabs.Tab id="tab-1" name="First Tab">
          <div>Test</div>
        </CardFolderTabs.Tab>
      </CardFolderTabs>,
    );

    expect(await driver.exists()).toBe(true);
  });

  it('should render correct content by selected tab', async () => {
    const FIRST_TAB_CONTENT = 'FIRST_TAB_CONTENT';
    const SECOND_TAB_CONTENT = 'SECOND_TAB_CONTENT';

    const { driver } = render(
      <CardFolderTabs activeId="tab-2">
        <CardFolderTabs.Tab id="tab-1" name="First Tab">
          <div>{FIRST_TAB_CONTENT}</div>
        </CardFolderTabs.Tab>
        <CardFolderTabs.Tab id="tab-2" name="Second Tab">
          <div>{SECOND_TAB_CONTENT}</div>
        </CardFolderTabs.Tab>
      </CardFolderTabs>,
    );

    expect(await driver.getCurrentTabTextContent()).toBe(SECOND_TAB_CONTENT);
  });

  it('should call onTabChange when tab is selected', async () => {
    const FIRST_TAB_CONTENT = 'FIRST_TAB_CONTENT';
    const DISABLED_TAB_CONTENT = 'DISABLED_TAB_CONTENT';
    const tabChangeSpy = jest.fn();

    const { driver } = render(
      <CardFolderTabs activeId="tab-1" onTabChange={tabChangeSpy}>
        <CardFolderTabs.Tab id="tab-1" name="First Tab">
          <div>{FIRST_TAB_CONTENT}</div>
        </CardFolderTabs.Tab>
        <CardFolderTabs.Tab id="tab-2" name="Second Tab">
          <div>{DISABLED_TAB_CONTENT}</div>
        </CardFolderTabs.Tab>
      </CardFolderTabs>,
    );

    await driver.selectTab(1);

    expect(tabChangeSpy).toBeCalled();
  });

  it('should not call onTabChange when clicking on tab which is disabled', async () => {
    const FIRST_TAB_CONTENT = 'FIRST_TAB_CONTENT';
    const DISABLED_TAB_CONTENT = 'DISABLED_TAB_CONTENT';
    const tabChangeSpy = jest.fn();

    const { driver } = render(
      <CardFolderTabs activeId="tab-1" onTabChange={tabChangeSpy}>
        <CardFolderTabs.Tab id="tab-1" name="First Tab">
          <div>{FIRST_TAB_CONTENT}</div>
        </CardFolderTabs.Tab>
        <CardFolderTabs.Tab id="tab-2" name="Disabled Tab" disabled>
          <div>{DISABLED_TAB_CONTENT}</div>
        </CardFolderTabs.Tab>
      </CardFolderTabs>,
    );

    await driver.selectTab(1);

    expect(tabChangeSpy).not.toBeCalled();
  });
});
