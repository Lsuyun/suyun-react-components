import React from 'react';
import { CopyButton } from 'sy-react-components';

const CopyButtonTest: React.FC = () => {
  return (
    <>
      <CopyButton copyText="1231234"></CopyButton>
    </>
  );
};

export default React.memo(CopyButtonTest);
