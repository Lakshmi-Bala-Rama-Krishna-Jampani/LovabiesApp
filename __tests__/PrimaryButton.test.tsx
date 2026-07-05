import React from 'react';
import { act } from 'react-test-renderer';
import ReactTestRenderer from 'react-test-renderer';

import { PrimaryButton } from '../src/components/common/Button';

describe('PrimaryButton', () => {
  it('renders provided label', () => {
    let tree: ReactTestRenderer.ReactTestRenderer | undefined;

    act(() => {
      tree = ReactTestRenderer.create(
        <PrimaryButton label="Confirm" onPress={() => undefined} />,
      );
    });

    expect(tree?.toJSON()).toMatchObject({
      type: 'View',
    });
  });
});
