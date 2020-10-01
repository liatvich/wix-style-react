import React from 'react';
import {
  header,
  tabs,
  tab,
  description,
  importExample,
  title,
  divider,
  example as baseExample,
  playground,
  api,
  testkit,
} from 'wix-storybook-utils/Sections';
import { Add } from 'wix-ui-icons-common';
import { storySettings } from '../test/storySettings';
import allComponents from '../../../stories/utils/allComponents';
import * as examples from './examples';
import CardFolderTabs from '..';
import Card from '../../Card';
import EmptyState from '../../EmptyState';
import TextButton from '../../TextButton';

const example = config => baseExample({ components: allComponents, ...config });
const children = [
  <CardFolderTabs.Tab id="1" name="Nice tab">
    <Card>
      <Card.Content>
        <EmptyState
          title="This is a nice tab"
          subtitle="Create your own tabs and try them!"
          theme="section"
        >
          <TextButton prefixIcon={<Add />}>Pointless button</TextButton>
        </EmptyState>
      </Card.Content>
    </Card>
  </CardFolderTabs.Tab>,
  <CardFolderTabs.Tab id="2" name="Another nice tab">
    <Card>
      <Card.Content>
        <EmptyState
          title="This is also a nice tab"
          subtitle="It has a very long title that will eventually be truncated by ellipsis"
          theme="section"
        >
          <TextButton prefixIcon={<Add />}>Pointless button</TextButton>
        </EmptyState>
      </Card.Content>
    </Card>
  </CardFolderTabs.Tab>,
];

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: CardFolderTabs,
  componentPath: '..',

  componentProps: {
    maxTabWidth: '138px',
    activeId: '1',
    children,
  },

  exampleProps: {
    onTabChange: () => 'I was called',
    activeId: ['1', '2'],
  },

  hiddenProps: ['children'],

  sections: [
    header({
      sourceUrl: `https://github.com/wix/wix-style-react/tree/master/src/${CardFolderTabs.displayName}/`,
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description({
            title: 'Basic Example',
            text:
              'CardFolderTabs combined with CardFolderTabs.Tab compound component enables navigation between content at the same page.',
          }),

          importExample(),

          divider(),

          title('Examples'),

          example({
            title: 'Simple Usage',
            text:
              'An example with disabled tab and a long tab name. Long names have ellipsis overflow with a tooltip containing full name.',
            source: examples.simple,
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
