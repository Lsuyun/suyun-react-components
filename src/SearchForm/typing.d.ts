import React from 'react';

/*
 * @Author: liusuyun
 * @Date: 2022-04-28 18:02:22
 * @LastEditors: liusuyun
 * @LastEditTime: 2022-04-28 21:54:47
 * @Description:
 */
export declare type FormInstanceType<Values = any> = {
  /**
   * @description     获取对应字段名的值
   * @default         -
   */
  getFieldValue: (name: NamePath) => StoreValue;

  /**
   * @description     获取一组字段名对应的值，会按照对应结构返回。默认返回现存字段值，当调用 getFieldsValue(true) 时返回所有值
   * @default         -
   */
  getFieldsValue: (() => Values) &
    ((nameList: NamePath[] | true, filterFunc?: (meta: Meta) => boolean) => any);

  /**
   * @description     获取对应字段名的错误信息
   * @default         -
   */
  getFieldError: (name: NamePath) => string[];

  /**
   * @description     获取一组字段名对应的错误信息，返回为数组形式
   * @default         -
   */
  getFieldsError: (nameList?: NamePath[]) => FieldError[];

  /**
   * @description     检查一组字段是否被用户操作过，allTouched 为 true 时检查是否所有字段都被操作过
   * @default         -
   */
  isFieldsTouched: ((nameList?: NamePath[], allFieldsTouched?: boolean) => boolean) &
    ((allFieldsTouched?: boolean) => boolean);

  /**
   * @description     检查对应字段是否被用户操作过
   * @default         -
   */
  isFieldTouched: (name: NamePath) => boolean;

  /**
   * @description     检查对应字段是否正在校验
   * @default         -
   */
  isFieldValidating: (name: NamePath) => boolean;

  /**
   * @description     重置一组字段到 initialValues
   * @default         -
   */
  resetFields: (fields?: NamePath[]) => void;

  /**
   * @description     设置一组字段状态
   * @default         -
   */
  setFields: (fields: FieldData[]) => void;

  /**
   * @description     设置表单的值（该值将直接传入 form store 中。如果你不希望传入对象被修改，请克隆后传入）
   * @default         -
   */
  setFieldsValue: (values: RecursivePartial<Values>) => void;

  /**
   * @description     触发表单验证
   * @default         -
   */
  validateFields: ValidateFields<Values>;

  /**
   * @description     提交表单，与点击 submit 按钮效果相同
   * @default         -
   */
  submit: () => void;

  /**
   * @description     滚动到对应字段位置
   * @default         -
   */
  scrollToField: (name: NamePath, options: ScrollOptions) => void;
};

export declare type SearchFormType = {
  /**
   * @description     经 Form.useForm() 创建的 form 控制实例，不提供时会自动创建，同antd里form表单的form
   * @default         -
   */
  form?: FormInstanceType;

  /**
   * @description   栅格间隔,可以写成像素值或支持响应式的对象写法来设置水平间隔 { xs: 8, sm: 16, md: 24}。或者使用数组同时设置 [水平, 垂直],具体项见下表
   * @default         [16,16]
   */
  gutter?: number[] | number | Record<string, number>;

  /**
   * @description     栅格占位格数，需要写成这种格式{xxl:{span:6}}
   * @default         {xxl:{span:6},lg:{span:12},xl:{span:8},md:{span:12},sm:{span:24},xs:{span:24}}
   */
  colSpan?: Record<string, any>;

  /**
   * @description    重置按钮的文字
   * @default         重置
   */
  resetText?: string | number;

  /**
   * @description   查询按钮的文字
   * @default         查询
   */
  searchText?: string | number;

  /**
   * @description    控件列表数组，具体项见下表
   * @default         []
   */
  searchColumns?: Record<string, any>[];

  /**
   * @description   点击重置按钮回调事件
   * @default      -
   */
  onReset?: (values: Record<string, any>) => void;

  /**
   * @description  提交表单且数据校验成功后回调事件
   * @default
   */
  onFinish?: (values: Record<string, any>) => void;
};

export declare type SearchColumnsType = {
  /**
   * @description   控件标题的内容
   * @default         -
   */
  label: string | ReactNode;

  /**
   * @description   与实体映射的 key
   * @default         -
   */
  dataIndex: string;

  /**
   * @description  form表单中formItem的配置项，可参考antd中<Form.item>对应的配置项https://ant.design/components/form-cn/  需注意的是可设置colSpan，例如colSpan:{xxl:{span:6},lg:{span:6}}等，优先级高于SearchForm组件配置的colSpan
   * @default         -
   */
  formItemProps: Record<string, any>;

  /**
   * @description  控件的配置项，antd 组件的 props，需注意的是当控件为radio,checkbox,select时，可使用fieldNames：自定义节点 label、value的字段，options：列表项
   * @description
   * @default         -
   */
  itemProps: Record<string, any>;

  /**
   * @description   控件类型，和form表单的控件类型命名一致，如Select选择器type为select
   * @default         'input'
   */
  type: string;

  /**
   * @description   当type为rangePicker时，可使用transform将值转成指定的字段，如transform:(value)=>{return{aa:value[0],bb:value[1]}},则在提交函数或者重置函数时返回的值就有aa和bb字段的值
   * @default         'input'
   */
  transform: (values: string[] | null[]) => {};

  /**
   * @description   自定义控件渲染内容
   * @default         -
   */
  render: () => {};
};
