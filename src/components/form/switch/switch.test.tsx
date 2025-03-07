/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import React from 'react';
import { render } from 'enzyme';
import { requiredProps } from '../../../test/required_props';
import { shouldRenderCustomStyles } from '../../../test/internal';

import { EuiSwitch } from './switch';

const props = {
  checked: false,
  label: 'Label',
  onChange: () => {},
};

describe('EuiSwitch', () => {
  shouldRenderCustomStyles(<EuiSwitch {...props} />, {
    skipStyles: true, // styles are applied to the nested button instead of the className wrapper
  });
  shouldRenderCustomStyles(<EuiSwitch {...props} />, {
    childProps: ['labelProps'],
    skipParentTest: true,
  });

  test('is rendered', () => {
    const component = render(
      <EuiSwitch id="test" {...props} {...requiredProps} />
    );

    expect(component).toMatchSnapshot();
  });

  test('assigns automatically generated ID to label', () => {
    const component = render(<EuiSwitch {...props} />);

    expect(component).toMatchSnapshot();
  });
  describe('labelProps', () => {
    it('is rendered', () => {
      const component = render(
        <EuiSwitch {...props} labelProps={requiredProps} />
      );

      expect(component).toMatchSnapshot();
    });
  });
});
