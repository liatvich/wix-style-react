import * as React from 'react';
import AddressInput from '..';
import { addressInputTestkitFactory } from '../../../testkit';
import { addressInputTestkitFactory as addressInputEnzymeTestkitFactory } from '../../../testkit/enzyme';
import { addressInputTestkitFactory as addressInputPuppeteerTestkitFactory } from '../../../testkit/puppeteer';
import * as enzyme from 'enzyme';
import * as puppeteer from 'puppeteer';

function addressInputWithMandatoryProps() {
  return <AddressInput />;
}

function addressInputWithAllProps() {
  return (
    <AddressInput
      dataHook="dataHook"
      className="className"
      clearButton
      initialValue="address"
      onSelect={value => {}}
      debounceDuration={200}
      onChange={value => {}}
      options={[{ id: 0, value: 'value' }]}
      onClear={() => {}}
      status="warning"
      roundInput
      optionsLayout="single-line"
      showOptionsIcons
      size="small"
    />
  );
}

async function testkits() {
  const testkit = addressInputTestkitFactory({
    dataHook: 'hook',
    wrapper: document.createElement('div'),
  });

  const enzymeTestkit = addressInputEnzymeTestkitFactory({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />),
  });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const puppeteerTestkit = await addressInputPuppeteerTestkitFactory({
    dataHook: 'hook',
    page,
  });
}
