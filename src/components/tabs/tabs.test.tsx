/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import React from 'react';
import { render } from 'enzyme';
import { requiredProps } from '../../test/required_props';
import { shouldRenderCustomStyles } from '../../test/internal';

import { EuiTabs } from './tabs';

const SIZES = ['s', 'm', 'l', 'xl'] as const;

describe('EuiTabs', () => {
  shouldRenderCustomStyles(<EuiTabs>children</EuiTabs>);

  test('renders', () => {
    const component = <EuiTabs {...requiredProps}>children</EuiTabs>;

    expect(render(component)).toMatchSnapshot();
  });

  describe('props', () => {
    describe('size', () => {
      SIZES.forEach((size) => {
        it(`${size} is rendered`, () => {
          const component = render(<EuiTabs size={size}>children</EuiTabs>);

          expect(component).toMatchSnapshot();
        });
      });
    });

    describe('expand', () => {
      test('is rendered', () => {
        const component = render(<EuiTabs expand>children</EuiTabs>);
        expect(component).toMatchSnapshot();
      });
    });
  });
});
