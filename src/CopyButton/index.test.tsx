import React from 'react';
import { CopyButton } from 'sy-react-components';
import { Tooltip } from 'antd';
import type { CopyButtonType } from './typing';

const CopyButtonTest: React.FC<CopyButtonType> = () => {
  const copyParams = {
    request: () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({ success: true, data: 'cceshisa' });
        }, 2000);
      });
    },
    tips: '操作',
    loadingRender: '加载中',
    render: <span>sadsfasf</span>,
    successRender: <span>成功</span>,
    failRender: <span>失败</span>,
  };
  const defaultFailParams = {
    request: () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({ success: false, data: 'cceshisa' });
        }, 2000);
      });
    },
  };
  const defaultSuccessParams = {
    request: () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({ success: true, data: 'cceshisa' });
        }, 2000);
      });
    },
  };
  return (
    <>
      <div>
        自定义样式：<CopyButton {...copyParams}></CopyButton>
      </div>
      <div>
        默认的复制失败时的渲染样式：<CopyButton {...defaultFailParams}></CopyButton>
      </div>
      <div>
        默认的复制成功时的渲染样式:<CopyButton {...defaultSuccessParams}></CopyButton>
      </div>
    </>
  );
};

export default React.memo(CopyButtonTest);
