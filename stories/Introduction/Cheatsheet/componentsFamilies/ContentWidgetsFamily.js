import React, { PureComponent } from 'react';
import {
  FamilyStructure,
  SingleComponentStacked,
  NotDefined,
  NotDeveloped,
  Preview,
  singleComponentSizes,
} from '../sharedComponents';

import { contentWidgetsSymbolsToComponents } from '../../../symbolsComponentsMapping/families/contentWidgetsFamily';

import { createLinkedComponentsNames } from '../sharedComponents/utils';
import { standardData as areaChartData } from '../../../../src/AreaChart/docs/examples';

import {
  contentWidgetsSymbols,
  symbolsGroup,
} from '../../../symbolsComponentsMapping/symbols';

import Hint from 'wix-ui-icons-common/Hint';
import ChevronDown from 'wix-ui-icons-common/ChevronDown';

import {
  Layout,
  Input,
  FormField,
  Dropdown,
  Text,
  Box,
  CardGalleryItem,
  Badge,
  Container,
  Row,
  Col,
  Card,
  DropdownBase,
  TextButton,
  Button,
  EmptyState,
  StatisticsWidget,
  Carousel,
  Accordion,
  PreviewWidget,
  MobilePreviewWidget,
  BrowserPreviewWidget,
  MarketingLayout,
  BarChart,
  Timeline,
  FunnelChart,
  AreaChart,
  SelectableAccordion,
} from 'wix-style-react';

const groupSymbol = symbolsGroup.contentWidgets;

const ImageWidgetExample = () => {
  const symbol = contentWidgetsSymbols.imageWidget;
  const components = contentWidgetsSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: components,
  };

  return (
    <SingleComponentStacked {...singleComponentProps}>
      <NotDefined />
    </SingleComponentStacked>
  );
};

const EmptyStateExample = () => {
  const symbol = contentWidgetsSymbols.emptyState;
  const components = contentWidgetsSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: createLinkedComponentsNames(components),
  };

  return (
    <SingleComponentStacked {...singleComponentProps}>
      <Preview wrapWithCardContent stretch>
        <EmptyState
          image={
            <Box
              height="120px"
              width="120px"
              backgroundColor="D60"
              borderRadius="50%"
            />
          }
          subtitle="Create your product item in an easy & fast way to display it on your site"
          title="You don't have any items yet"
        />
      </Preview>
    </SingleComponentStacked>
  );
};

class StatisticsWidgetExamples extends PureComponent {
  state = { date: '7d', filter: 'All' };

  _getSuffix() {
    return [
      <DropdownBase
        key="days"
        onSelect={({ id }) => this.setState({ date: id })}
        options={[
          { id: '7d', value: 'Last 7 days' },
          { id: '14d', value: 'Last 14 days' },
        ]}
      >
        {({ toggle, selectedOption = { id: '7d', value: 'Last 7 days' } }) => {
          return (
            <TextButton
              skin="dark"
              suffixIcon={<ChevronDown />}
              onClick={toggle}
            >
              {selectedOption.value}
            </TextButton>
          );
        }}
      </DropdownBase>,
      <Box key="spacer" width="24px" />,
      <DropdownBase
        key="region"
        onSelect={({ id }) => this.setState({ filter: id })}
        options={[
          { id: 'US', value: 'Only from US' },
          { id: 'All', value: 'All' },
        ]}
      >
        {({ toggle, selectedOption = { id: 'All', value: 'All' } }) => {
          return (
            <TextButton
              skin="dark"
              suffixIcon={<ChevronDown />}
              onClick={toggle}
            >
              {selectedOption.value}
            </TextButton>
          );
        }}
      </DropdownBase>,
    ];
  }

  render() {
    const weekUS = [
      {
        value: '500',
        description: 'Views',
        percentage: 21,
        onClick: () => {},
      },
      {
        value: '350',
        description: 'Unique visits',
        percentage: 21,
      },
      {
        value: '3.9',
        description: 'Pages per visitor',
        percentage: -11,
      },
      {
        value: '$3,500',
        description: 'Revenue',
        percentage: -11,
        descriptionInfo: 'Revenue in 7 days',
        onClick: () => {},
      },
      {
        value: '0',
        description: 'Shares',
        percentage: 0,
        descriptionInfo: 'Shares in 7 days',
        onClick: () => {},
      },
    ];

    const twoWeeksUS = [
      {
        value: '700',
        description: 'Views',
        percentage: 19,
        onClick: () => {},
      },
      {
        value: '500',
        description: 'Unique visits',
        percentage: 21,
      },
      {
        value: '3.2',
        description: 'Pages per visitor',
        percentage: -11,
      },
      {
        value: '$5,700',
        description: 'Revenue',
        percentage: -11,
        descriptionInfo: 'Revenue in 14 days',
        onClick: () => {},
      },
      {
        value: '0',
        description: 'Shares',
        percentage: 0,
        descriptionInfo: 'Shares in 14 days',
        onClick: () => () => {},
      },
    ];

    const weekAll = [
      {
        value: '1200',
        description: 'Views',
        percentage: 21,
        onClick: () => {},
      },
      {
        value: '900',
        description: 'Unique visits',
        percentage: 21,
      },
      {
        value: '4.1',
        description: 'Pages per visitor',
        percentage: 2,
      },
      {
        value: '$5,200',
        description: 'Revenue',
        percentage: 7,
        descriptionInfo: 'Revenue in 7 days',
        onClick: () => {},
      },
      {
        value: '3',
        description: 'Shares',
        percentage: 100,
        descriptionInfo: 'Shares in 7 days',
        onClick: () => {},
      },
    ];

    const twoWeeksAll = [
      {
        value: '1300',
        description: 'Views',
        percentage: 29,
        onClick: () => {},
      },
      {
        value: '1100',
        description: 'Unique visits',
        percentage: 14,
      },
      {
        value: '3.2',
        description: 'Pages per visitor',
        percentage: -1,
      },
      {
        value: '$6,400',
        description: 'Revenue',
        percentage: 11,
        descriptionInfo: 'Revenue in 14 days',
        onClick: () => {},
      },
      {
        value: '8',
        description: 'Shares',
        percentage: 95,
        descriptionInfo: 'Shares in 14 days',
        onClick: () => {},
      },
    ];

    const data = {
      '7d': {
        US: weekUS,
        All: weekAll,
      },
      '14d': {
        US: twoWeeksUS,
        All: twoWeeksAll,
      },
    };

    const getData = (date, filter) => data[date][filter];
    const { date, filter } = this.state;

    const symbol = contentWidgetsSymbols.statisticsWidget;
    const components = contentWidgetsSymbolsToComponents[symbol];

    const singleComponentProps = {
      name: symbol,
      componentsNames: createLinkedComponentsNames(components),
    };

    return (
      <SingleComponentStacked {...singleComponentProps}>
        <Preview stretch>
          <Card>
            <Card.Header
              title="Article performance"
              suffix={this._getSuffix()}
            />
            <Card.Content>
              <StatisticsWidget items={getData(date, filter)} />
            </Card.Content>
          </Card>
        </Preview>
      </SingleComponentStacked>
    );
  }
}

const CarouselExample = () => {
  const carouselItems = ['first', 'second', 'third'].map((ordinalNum, i) => (
    <Card key={`carousel-item-${i}`}>
      <Box height="66px" align="center" verticalAlign="middle">
        <Hint size="54px" color="#89cff8" />
        <Text>This is the {ordinalNum} information text </Text>
      </Box>
    </Card>
  ));

  const symbol = contentWidgetsSymbols.carousel;
  const components = contentWidgetsSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: createLinkedComponentsNames(components),
    size: singleComponentSizes.compact,
  };

  return (
    <SingleComponentStacked {...singleComponentProps}>
      <Preview stretch>
        <Carousel>{carouselItems}</Carousel>
      </Preview>
    </SingleComponentStacked>
  );
};

const AccordionExample = () => {
  const itemText = (
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua
    </Text>
  );

  const accordionItems = [
    {
      title: 'First Initially Open Row',
      children: itemText,
      open: true,
      collapseLabel: 'Less',
    },
    {
      title: 'Second Row',
      children: itemText,
      collapseLabel: 'Less',
    },
    {
      title: 'Third Row',
      children: itemText,
      collapseLabel: 'Less',
    },
  ];

  const symbol = contentWidgetsSymbols.accordion;
  const components = contentWidgetsSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: createLinkedComponentsNames(components),
    size: singleComponentSizes.compact,
  };

  return (
    <SingleComponentStacked {...singleComponentProps}>
      <Preview stretch>
        <Accordion multiple items={accordionItems} />
      </Preview>
    </SingleComponentStacked>
  );
};

const CardGalleryItemExample = () => {
  const backgroundImageUrl = 'example.jpg';

  const symbol = contentWidgetsSymbols.cardGalleryItem;
  const components = contentWidgetsSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: createLinkedComponentsNames(components),
    size: singleComponentSizes.compact,
  };

  return (
    <SingleComponentStacked {...singleComponentProps}>
      <Container>
        <Row>
          <Col span={5}>
            <Preview stretch>
              <CardGalleryItem
                title="Scheduled on Facebook"
                badge={
                  <Badge size="medium" skin="standard" type="solid" uppercase>
                    scheduled
                  </Badge>
                }
                subtitle="For Jan 30, 2019 (05:06 PM)"
                primaryActionProps={{
                  label: 'Edit Post',
                  onClick: () => {
                    alert('Primary action clicked');
                  },
                }}
                backgroundImageUrl={backgroundImageUrl}
              />
            </Preview>
          </Col>
        </Row>
      </Container>
    </SingleComponentStacked>
  );
};

const PreviewExample = () => {
  const symbol = contentWidgetsSymbols.preview;
  const components = contentWidgetsSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: createLinkedComponentsNames(components),
  };

  return (
    <SingleComponentStacked {...singleComponentProps}>
      <Container>
        <Row>
          <Col span={5}>
            <PreviewWidget>
              <Box padding="20px" backgroundColor="Y30">
                <Text>Content goes here</Text>
              </Box>
            </PreviewWidget>
          </Col>
        </Row>
        <Row>
          <Col span={5}>
            <BrowserPreviewWidget browserBarSize="size9">
              <Box padding="20px" backgroundColor="Y30">
                <Text>Content goes here</Text>
              </Box>
            </BrowserPreviewWidget>
          </Col>
        </Row>
        <Row>
          <Col span={5}>
            <MobilePreviewWidget>
              <Box
                align="center"
                verticalAlign="middle"
                height="100%"
                backgroundColor="Y30"
              >
                <Text>Content goes here</Text>
              </Box>
            </MobilePreviewWidget>
          </Col>
        </Row>
      </Container>
    </SingleComponentStacked>
  );
};

const OmniSetupExample = () => {
  const symbol = contentWidgetsSymbols.omniSetup;
  const components = contentWidgetsSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: components,
  };

  return (
    <SingleComponentStacked {...singleComponentProps}>
      <NotDeveloped />
    </SingleComponentStacked>
  );
};

const MarketingLayoutCardExample = () => {
  const symbol = contentWidgetsSymbols.marketingCardLayout;
  const components = contentWidgetsSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: createLinkedComponentsNames(components),
  };

  return (
    <SingleComponentStacked {...singleComponentProps}>
      <Preview wrapWithCard stretch>
        <MarketingLayout
          title="Marketing Card Title"
          description="Description text for Marketing Card."
          size="medium"
          actions={<Button size="medium">Action</Button>}
          image="https://static.parastorage.com/services/promote-seo/1.980.0/assets/task-list/ic-connect-to-google-icon.svg"
        />
      </Preview>
    </SingleComponentStacked>
  );
};

const BarChartExample = () => {
  const symbol = contentWidgetsSymbols.barChart;
  const components = contentWidgetsSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: createLinkedComponentsNames(components),
    size: singleComponentSizes.compact,
  };

  return (
    <SingleComponentStacked {...singleComponentProps}>
      <BarChart
        items={[
          {
            value: 25000,
            label: '$25,000',
            description: 'Sales',
          },
          {
            value: 48000,
            label: '$48,000',
            description: 'Subscription',
          },
          {
            value: 42000,
            label: '$42,000',
            description: 'Ads',
          },
        ]}
      />
    </SingleComponentStacked>
  );
};

const AreaChartExample = () => {
  const symbol = contentWidgetsSymbols.areaChart;
  const components = contentWidgetsSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: createLinkedComponentsNames(components),
  };

  return (
    <SingleComponentStacked {...singleComponentProps}>
      <Preview wrapWithCardContent stretch>
        <AreaChart
          data={areaChartData}
          tooltipContent={item => 'tooltip ' + item.label}
        />
      </Preview>
    </SingleComponentStacked>
  );
};

const TimelineExample = () => {
  const symbol = contentWidgetsSymbols.timeline;
  const components = contentWidgetsSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: createLinkedComponentsNames(components),
    size: singleComponentSizes.compact,
  };

  const items = [
    {
      label:
        'New Order: 1 item, $4.99 this will be a longer text that will be two lines or a very very long text for a vertical that needs a lot of text that will be three lines',
      suffix: (
        <TextButton weight="normal" size="small">
          suffix button
        </TextButton>
      ),
      labelAction: (
        <TextButton weight="normal" size="small">
          View Order
        </TextButton>
      ),
    },
    {
      label:
        'New Order: 1 item, $4.99 this will be a longer text that will be two lines or a very very long text for a vertical that needs a lot of text that will be three lines',
      suffix: 'Jan 1, 2019 12:03 AM',
      labelAction: (
        <TextButton weight="normal" size="small">
          View Order
        </TextButton>
      ),
    },
    {
      id: 1,
      label: 'Quote #8 Accepted: Website setup, $7.00',
    },
    {
      label:
        'New Order: 1 item, $4.99 this will be a longer text that will be two lines or a very very long text for a vertical that needs a lot of text that will be three lines',
      labelAction: (
        <TextButton weight="normal" size="small">
          View Order
        </TextButton>
      ),
    },
    {
      label:
        'New Order: 1 item, $4.99 this will be a longer text that will be two lines or a very very long text for a vertical that needs a lot of text that will be three lines',
      suffix: 'Jan 1, 2019 12:03 AM',
      labelAction: (
        <TextButton weight="normal" size="small">
          View Order
        </TextButton>
      ),
    },
  ];

  return (
    <SingleComponentStacked {...singleComponentProps}>
      <Preview wrapWithCardContent>
        <Timeline items={items} />
      </Preview>
    </SingleComponentStacked>
  );
};

const FunnelChartExample = () => {
  const symbol = contentWidgetsSymbols.funnelChart;
  const components = contentWidgetsSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: createLinkedComponentsNames(components),
  };

  const funnelChartData = [
    {
      value: 1220,
      label: 'visits',
    },
    {
      value: 800,
      label: 'product views',
    },
    {
      value: 630,
      label: 'cart',
    },
    {
      value: 410,
      label: 'checkout',
    },
    {
      value: 200,
      label: 'ordered',
    },
  ];

  return (
    <SingleComponentStacked {...singleComponentProps}>
      <Preview stretch wrapWithCardContent>
        <FunnelChart data={funnelChartData} />
      </Preview>
    </SingleComponentStacked>
  );
};

const SelectableAccordionExample = () => {
  const symbol = contentWidgetsSymbols.selectableAccordion;
  const components = contentWidgetsSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: createLinkedComponentsNames(components),
    size: singleComponentSizes.compact,
  };

  const items = [
    {
      initiallyOpen: true,
      title: 'Free Plan',
      subtitle: 'Offer this plan free of charge',
      content: (
        <FormField label="Length of Plan" required>
          <Dropdown
            placeholder="Select"
            options={[{ id: 0, value: '1 Month' }]}
          />
        </FormField>
      ),
    },
    {
      title: 'One-time Payment',
      subtitle: 'Charge a single upfront fee',
      content: (
        <Layout cols={1}>
          <FormField label="Price" required>
            <Input value={99} prefix={<Input.Affix>$</Input.Affix>} />
          </FormField>
          <FormField label="Length of Plan" required>
            <Dropdown
              placeholder="Select"
              options={[{ id: 0, value: '1 Month' }]}
            />
          </FormField>
        </Layout>
      ),
    },
  ];

  return (
    <SingleComponentStacked {...singleComponentProps}>
      <Preview>
        <SelectableAccordion items={items} />
      </Preview>
    </SingleComponentStacked>
  );
};

const SparklineExample = () => {
  const symbol = contentWidgetsSymbols.sparkline;
  const components = contentWidgetsSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: components,
  };

  return (
    <SingleComponentStacked {...singleComponentProps}>
      <NotDeveloped />
    </SingleComponentStacked>
  );
};

const StackedBarChartExample = () => {
  const symbol = contentWidgetsSymbols.stackedBarChart;
  const components = contentWidgetsSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: components,
  };

  return (
    <SingleComponentStacked {...singleComponentProps}>
      <NotDeveloped />
    </SingleComponentStacked>
  );
};

const ContentWidgetsFamily = () => (
  <FamilyStructure title={groupSymbol}>
    <ImageWidgetExample />
    <EmptyStateExample />
    <StatisticsWidgetExamples />
    <CarouselExample />
    <AccordionExample />
    <CardGalleryItemExample />
    <PreviewExample />
    <OmniSetupExample />
    <MarketingLayoutCardExample />
    <BarChartExample />
    <AreaChartExample />
    <TimelineExample />
    <FunnelChartExample />
    <SelectableAccordionExample />
  </FamilyStructure>
);

export default ContentWidgetsFamily;
