import React from 'react';
import { NoVoidSpace } from 'sy-react-components';

const NoVoidSpaceDemo: React.FC = () => {
  const NoVoidSpaceParams = {
    items: [1, null, NaN, 2, 0, {}, [], <div>ceshi121424</div>, undefined],
    split: '|',
  };
  const splitParams = {
    items: [1, null, NaN, 2, 0, {}, [], <div>ceshi121424</div>, undefined],
    split: <div style={{ color: 'red' }}>分割符</div>,
  };
  return (
    <>
      <NoVoidSpace {...NoVoidSpaceParams} />

      <div>
        <NoVoidSpace {...splitParams} />
      </div>
    </>
  );
};

export default NoVoidSpaceDemo;
