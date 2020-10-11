import React from 'react';
import { storiesOf } from '@storybook/react';
import { testkitFactoryCreator } from 'wix-ui-test-utils/vanilla';

import BadgeSelect from '..';
import badgeSelectPrivateDriverFactory from '../BadgeSelect.private.driver';
import Box from '../../Box';

const interactiveDataHook = 'interactive-badgeselect';

const baseProps = {
  options: [
    { id: '0', skin: 'general', text: 'general' },
    { id: '1', skin: 'standard', text: 'standard' },
    { id: '2', skin: 'danger', text: 'danger' },
    { id: '3', skin: 'success', text: 'success' },
    { id: '4', skin: 'neutral', text: 'neutral' },
    { id: '5', skin: 'neutralLight', text: 'neutralLight' },
    { id: '6', skin: 'warning', text: 'warning' },
    { id: '7', skin: 'warningLight', text: 'warningLight' },
    { id: '8', skin: 'urgent', text: 'urgent' },
    { id: '9', skin: 'neutralStandard', text: 'neutralStandard' },
    { id: '10', skin: 'neutralSuccess', text: 'neutralSuccess' },
    { id: '11', skin: 'neutralDanger', text: 'neutralDanger' },
    { id: '12', skin: 'premium', text: 'premium' },
  ],
};

const badgeSelectTestkitFactory = testkitFactoryCreator(
  badgeSelectPrivateDriverFactory,
);

const createDriver = dataHook =>
  badgeSelectTestkitFactory({
    wrapper: document.body,
    dataHook,
  });

class InteractiveEyeTest extends React.Component {
  async componentDidMount() {
    this.props.componentDidMount();
  }

  render() {
    const { componentDidMount, ...restProps } = this.props;

    return (
      <Box margin={3} align="center">
        <BadgeSelect dataHook={interactiveDataHook} {...restProps} />
      </Box>
    );
  }
}

const tests = [
  {
    describe: 'Basic',
    its: [
      {
        it: `Should render the selected id`,
        props: {
          ...baseProps,
          selectedId: '3',
        },
      },
    ],
  },
];

const interactiveTests = [
  {
    describe: 'Dropdown',
    its: [
      {
        it: 'Should open the dropdown on click',
        props: {
          ...baseProps,
        },
        componentDidMount: async () => {
          const { driver } = createDriver(interactiveDataHook);

          driver.click();
        },
      },
      {
        it: 'Should not wrap between whitespaces',
        props: {
          options: ['general', 'standard', 'danger'].map((skin, id) => ({
            id: id.toString(),
            skin,
            text: `${skin} ${skin}`,
          })),
        },
        componentDidMount: async () => {
          const { driver } = createDriver(interactiveDataHook);

          driver.click();
        },
      },
      {
        it: 'Should render the option subtitle',
        props: {
          options: [
            {
              id: '0',
              skin: 'general',
              text: `general`,
              subtitle: `subtitle - general general`,
            },
            {
              id: '1',
              skin: 'standard',
              text: `standard`,
            },
          ],
        },
        componentDidMount: async () => {
          const { driver } = createDriver(interactiveDataHook);

          driver.click();
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`BadgeSelect${describe ? '/' + describe : ''}`, module).add(
      it,
      () => (
        <Box margin={3} align="center">
          <BadgeSelect {...props} />
        </Box>
      ),
    );
  });
});

interactiveTests.forEach(({ describe, its }) => {
  its.forEach(({ it, props, componentDidMount }) => {
    storiesOf(`BadgeSelect${describe ? '/' + describe : ''}`, module).add(
      it,
      () => (
        <InteractiveEyeTest {...props} componentDidMount={componentDidMount} />
      ),
    );
  });
});
