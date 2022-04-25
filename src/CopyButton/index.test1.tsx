/*
 * @Author: liusuyun
 * @Date: 2022-04-25 16:53:49
 * @LastEditors: liusuyun
 * @LastEditTime: 2022-04-25 17:00:50
 * @Description:
 */
import React from 'react';
import { CopyButton } from 'sy-react-components';
import { Tooltip } from 'antd';
import type { CopyButtonType } from './typing';

const CopyButtonTest: React.FC<CopyButtonType> = () => {
  return (
    <>
      <CopyButton copyText="1231234"></CopyButton>
    </>
  );
};

export default React.memo(CopyButtonTest);
