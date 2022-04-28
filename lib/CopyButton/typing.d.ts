/*
 * @Author: liusuyun
 * @Date: 2022-04-25 11:12:54
 * @LastEditors: liusuyun
 * @LastEditTime: 2022-04-25 19:02:10
 * @Description:
 */
import React from 'react';
interface requestProps {
  success: boolean;
  data: string | number;
}
export declare type CopyButtonType = {
  /**
   * @description       复制的内容，同步复制时需要传的内容，优先级高于request
   * @default           true
   */
  copyText?: string | number;

  /**
   * @description       异步请求获取复制的内容，是一个函数，返回值的格式必须是{success:boolean,data:string | number}
   * @default           true
   */
  request?: () => requestProps;

  /**
   * @description     复制成功时鼠标移上去的提示文案
   * @default           复制成功
   */
  successTips?: string;

  /**
   * @description     复制失败时鼠标移上去的提示文案
   * @default           复制失败
   */
  failTips?: string;

  /**
   * @description     可复制时鼠标移上去的提示文案
   * @default           复制
   */
  tips?: string;

  /**
   * @description     异步获取数据时加载时的渲染
   * @default           ant-design/icons里的LoadingOutlined
   */
  loadingRender?: React.ReactNode | string;

  /**
   * @description    异步获取数据时复制成功时的渲染
   * @default           ant-design/icons里的CheckOutlined
   */
  successRender?: React.ReactNode | string;

  /**
   * @description  异步获取数据时复制失败时的渲染
   * @default           ant-design/icons里的ExclamationCircleOutlined
   */
  failRender?: React.ReactNode | string;

  /**
   * @description   自定义渲染内容
   * @default           "<CopyOutlined />"
   */
  render?: React.ReactNode | string;

  /**
   * @description   设置后置内容
   * @default           null
   */
  addonAfter?: React.ReactNode | string | number;

  /**
   * @description   设置前置内容
   * @default           null
   */
  addonBefore?: React.ReactNode | string | number;

  [name?: string]: any;
};
