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
  code as baseCode,
  playground,
  api,
  testkit,
} from 'wix-storybook-utils/Sections';

import { storySettings } from '../test/storySettings';
import allComponents from '../../../stories/utils/allComponents';

import StackedBarChart from '..';

const example = config => baseExample({ components: allComponents, ...config });
const code = config => baseCode({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: StackedBarChart,
  componentPath: '..',

  componentProps: {
    buttonText: 'Hello World!',
  },

  exampleProps: {
    // Put here presets of props, for more info:
    // https://github.com/wix/wix-ui/blob/master/packages/wix-storybook-utils/docs/usage.md#using-list
  },

  sections: [
    header({
      sourceUrl: `https://github.com/wix/wix-style-react/tree/master/src/${StackedBarChart.displayName}/`,
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description({
            title: 'Description',
            text:
              'This line here should briefly describe component in just a sentence or two. It should be short and easy to read.',
          }),

          importExample(),

          divider(),

          title('Examples'),

          code({
            compact: true,
            initiallyOpen: true,
            source: `
<Card>
  <Card.Header
    title="Monthly App Revenue"
    suffix={<TextButton size="small">Learn more</TextButton>}
  />
  <Card.Divider />
  <Card.Content>
    <Box align="center">
      <StackedBarChart
        data={[
          { label: 'Jan 20', values: [500, 200] },
          { label: 'Feb 20', values: [200, 700] },
          { label: 'Mar 20', values: [0, 400] },
          { label: 'Apr 20', values: [900, 100] },
          { label: 'Mai 20', values: [300, 300] },
          { label: 'Jun 20', values: [400, 300] },
          { label: 'Jul 20', values: [100, 100] },
          { label: 'Aug 20', values: [0, 0] },
          { label: 'Sep 20', values: [800, 0] },
          { label: 'Oct 20', values: [600, 300] },
          { label: 'Nov 20', values: [200, 300] },
          { label: 'Dec 20', values: [300, 200] },
        ]}
        tooltipTemplate={({ label, values }) => (
          <Box direction="vertical">
            <Text size="small" light>
              Total: {values[0] + values[1]} $
            </Text>
            <Text size="small" light>
              Payout: {values[1]} $
            </Text>
          </Box>
        )}
      />
    </Box>
  </Card.Content>
</Card>
            `,
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
