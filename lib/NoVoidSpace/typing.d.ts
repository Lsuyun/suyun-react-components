/*
 * @Author: liusuyun
 * @Date: 2022-04-25 17:57:58
 * @LastEditors: liusuyun
 * @LastEditTime: 2022-04-25 19:01:37
 * @Description:
 */
import React from 'react';

type SizeType = 'small' | 'middle' | 'large' | undefined;
export declare type NoVoidSpaceType = {
  /**
   * @description    间距大小
   * @default           true
   */
  size?: SizeType | number;

  /**
   * @description    需要渲染的数据列表
   * @default           []
   */
  items?: any[];

  /**
   * @description  设置
   * @default      ,
   */
  split?: React.ReactNode | string | number;
};
