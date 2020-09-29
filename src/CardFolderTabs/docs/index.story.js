import {
  header,
  tabs,
  tab,
  description,
  importExample,
  title,
  divider,
  example as baseExample,
  code as baseCode,
  playground,
  api,
  testkit,
} from 'wix-storybook-utils/Sections';

import { storySettings } from '../test/storySettings';
import allComponents from '../../../stories/utils/allComponents';

import CardFolderTabs from '..';

const example = config => baseExample({ components: allComponents, ...config });
const code = config => baseCode({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: CardFolderTabs,
  componentPath: '..',

  componentProps: {
    maxTabWidth: 200,
    dataHook: 'some-data-hook',
    className: 'wrapper-class-name',
    activeId: '1',
  },

  exampleProps: {
    maxTabWidth: 200,
    dataHook: 'some-data-hook',
    className: 'wrapper-class-name',
    activeId: '1',
  },

  sections: [
    header({
      sourceUrl: `https://github.com/wix/wix-style-react/tree/master/src/${CardFolderTabs.displayName}/`,
    }),

    tabs([
      tab({
        title: 'Basic Example',
        sections: [
          description({
            title: 'Basic Example',
            text:
              'CardFolderTabs combined with CardFolderTabs.Tab compound component enables navigation between content at the same page.',
          }),

          importExample(
            `import { CardFolderTabs } from 'wix-style-react';
const { Tab } = CardFolderTabs;`,
          ),

          divider(),

          title('Examples'),

          example({
            title: 'Simple Usage',
            text:
              'An example with disabled tab and a long tab name. Long names have ellipsis overflow with a tooltip containing full name.',
            source: `
              class CollapsableCard extends React.Component {
                state = { activeTabId: "1" };
                render() {
                  return (
                    <CardFolderTabs activeId={this.state.activeTabId} onTabChange={(activeTabId) => this.setState({activeTabId})}>
                      <CardFolderTabs.Tab id="1" name="Some tab">
                        <div style={{height: 400}}>First tab content</div>
                      </CardFolderTabs.Tab>
                      <CardFolderTabs.Tab id="2" name="Looooooooong tab name">
                        <div style={{height: 400}}>Second tab content</div>
                      </CardFolderTabs.Tab>
                      <CardFolderTabs.Tab id="3" name="Disabled tab" disabled>
                        <div style={{height: 400}}>Third tab content</div>
                      </CardFolderTabs.Tab>
                    </CardFolderTabs>
                  );
                }
              }`,
          }),

          code({
            title: 'Interactive Preview',
            source: `
              class CollapsableCard extends React.Component {
                state = { activeTabId: "1" };
                render() {
                  return (
                    <CardFolderTabs activeId={this.state.activeTabId} onTabChange={(activeTabId) => this.setState({activeTabId})}>
                      <CardFolderTabs.Tab id="1" name="Some tab">
                        <div style={{height: 400}}>First tab content</div>
                      </CardFolderTabs.Tab>
                      <CardFolderTabs.Tab id="2" name="Looooooooong tab name">
                        <div style={{height: 400}}>Second tab content</div>
                      </CardFolderTabs.Tab>
                      <CardFolderTabs.Tab id="3" name="Disabled tab" disabled>
                        <div style={{height: 400}}>Third tab content</div>
                      </CardFolderTabs.Tab>
                    </CardFolderTabs>
                  );
                }
              }`,
          }),
        ],
      }),

      ...[
        { title: 'API', sections: [api()] },
        { title: 'Testkit', sections: [testkit()] },
        { title: 'Playground', sections: [playground()] },
      ].map(tab),
    ]),
  ],
};
