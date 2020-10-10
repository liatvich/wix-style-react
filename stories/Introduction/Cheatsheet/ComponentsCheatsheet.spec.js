import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';
import { baseUniDriverFactory } from '../../../test/utils/unidriver';

import FoundationFamily from './componentsFamilies/FoundationFamily';
import LayoutFamily from './componentsFamilies/LayoutFamily/LayoutFamily';
import InputFamily from './componentsFamilies/InputFamily';
import SelectionFamily from './componentsFamilies/SelectionFamily';
import ButtonFamily from './componentsFamilies/ButtonFamily';
import NavigationFamily from './componentsFamilies/NavigationFamily';
import TooltipFamily from './componentsFamilies/TooltipFamily';
import NotificationFamily from './componentsFamilies/NotificationFamily';
// import ModalFamily from './componentsFamilies/ModalFamily';
import PickerFamily from './componentsFamilies/PickerFamily';
// import OtherFamily from './componentsFamilies/OtherFamily';
import ContentWidgetsFamily from './componentsFamilies/ContentWidgetsFamily';
import InternalFamily from './componentsFamilies/InternalFamily';

const componentsFamiliesArr = [
  FoundationFamily,
  LayoutFamily,
  InputFamily,
  SelectionFamily,
  ButtonFamily,
  NavigationFamily,
  TooltipFamily,
  NotificationFamily,
  // ModalFamily,
  PickerFamily,
  // OtherFamily,
  ContentWidgetsFamily,
  InternalFamily,
];

componentsFamiliesArr.forEach(Family => {
  describe(Family.name, () => {
    const render = createRendererWithUniDriver(baseUniDriverFactory);

    afterEach(cleanup);

    it('should render', async () => {
      const { driver } = render(<Family />);

      expect(await driver.exists()).toBe(true);
    });
  });
});
