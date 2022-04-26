/*
 * @Author: liusuyun
 * @Date: 2022-04-25 17:57:30
 * @LastEditors: liusuyun
 * @LastEditTime: 2022-04-26 16:09:56
 * @Description:基于antd Space进行重新封装
 */
import React from 'react';
import { Space } from 'antd';
import lodash from 'lodash';
import type { NoVoidSpaceType } from './typing';

export interface Props {
  [propName: string]: any;
}
interface ruleI {
  data?: any;
  empty?: string | number | React.ReactNode | null; // 当 data 为 null 或 undefined 或 '' 时，默认不渲染受 data 约束的元素，如果要渲染，可以制定这个参数
}

// null || undefined || '' || NaN || {} || [] 时不渲染元素，其它情况均渲染。
const isVoid = (val: any): boolean => {
  if (lodash.isFunction(val)) {
    return false;
  }

  return (
    val === null ||
    val === undefined ||
    val === '' ||
    lodash.isNaN(val) ||
    (lodash.isObject(val) && lodash.isEmpty(val))
  );
};
const NoVoidSpace: React.FC<NoVoidSpaceType> = (props) => {
  const { items = [], split = ',' } = props;
  const cloneItems = items.filter((item: any) => {
    return !isVoid(item);
  });

  const renderEmpty = (empty: ruleI['empty'], key: number) => {
    if (empty === null || empty === undefined) {
      return null;
    }

    if (lodash.isString(empty) || lodash.isNumber(empty)) {
      return <span key={key}>{empty}</span>;
    }

    if (React.isValidElement(empty)) {
      return empty;
    }

    return null;
  };
  return (
    <>
      <Space split={split} size="large">
        {cloneItems.map((data: any, key: number) => renderEmpty(data, key))}
      </Space>
    </>
  );
};

export default React.memo(NoVoidSpace);
