/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import { CommonProps } from '../../common';

import { EuiPanel, _EuiPanelProps, _EuiPanelDivlike } from '../../panel/panel';
import { HTMLAttributes } from 'enzyme';

export type EuiPageContentVerticalPositions = 'center';
export type EuiPageContentHorizontalPositions = 'center';

const verticalPositionToClassNameMap: {
  [position in EuiPageContentVerticalPositions]: string | null;
} = {
  center: 'euiPageContent--verticalCenter',
};

const horizontalPositionToClassNameMap: {
  [position in EuiPageContentHorizontalPositions]: string | null;
} = {
  center: 'euiPageContent--horizontalCenter',
};

export type EuiPageContentProps = CommonProps &
  // Use only the div properties of EuiPanel (not button)
  _EuiPanelProps &
  Omit<_EuiPanelDivlike, 'onClick' | 'role'> & {
    verticalPosition?: EuiPageContentVerticalPositions;
    horizontalPosition?: EuiPageContentHorizontalPositions;
    /**
     * There should only be one EuiPageContent per page and should contain the main contents.
     * If this is untrue, set role = `null`, or change it to match your needed aria role
     */
    role?: HTMLAttributes['role'] | null;
  };

/**
 * @deprecated Use EuiPageSection instead
 */
export const EuiPageContent_Deprecated: FunctionComponent<EuiPageContentProps> = ({
  verticalPosition,
  horizontalPosition,
  paddingSize = 'l',
  borderRadius,
  children,
  className,
  role: _role = 'main',
  ...rest
}) => {
  const role = _role === null ? undefined : _role;

  const borderRadiusClass =
    borderRadius === 'none' ? 'euiPageContent--borderRadiusNone' : '';

  const classes = classNames(
    'euiPageContent',
    borderRadiusClass,
    verticalPosition ? verticalPositionToClassNameMap[verticalPosition] : null,
    horizontalPosition
      ? horizontalPositionToClassNameMap[horizontalPosition]
      : null,
    className
  );

  return (
    <EuiPanel
      className={classes}
      paddingSize={paddingSize}
      borderRadius={borderRadius}
      role={role}
      {...rest}
    >
      {children}
    </EuiPanel>
  );
};
