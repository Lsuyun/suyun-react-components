import React from 'react';
import { Form } from 'antd';
import { SearchForm } from 'sy-react-components';

const SearchFormDemo: React.FC = () => {
  const [form] = Form.useForm();
  const formConfig = {
    form: form,
    gutter: [16, 16],
    colSpan: 6,
    resetText: '重置',
    searchText: '查询',
    searchColumns: [
      {
        label: '选择框',
        dataIndex: 'select',
        formItemProps: {},
        itemProps: {},
        type: 'select',
      },
      {
        label: '输入框',
        dataIndex: 'input',
        formItemProps: {},
        itemProps: {},
      },
      {
        label: '数字输入框',
        dataIndex: 'inputNumber',
        formItemProps: {},
        itemProps: {},
        type: 'inputNumber',
      },
      {
        label: '单选框',
        dataIndex: 'radio',
        formItemProps: {},
        itemProps: {
          options: [
            { label: '1234', value: 1 },
            { label: '122', value: 2 },
            { label: '123', value: 3 },
            { label: '124', value: 4 },
            { label: '125', value: 5 },
            { label: '126', value: 6 },
            { label: '127', value: 7 },
          ],
        },
        type: 'radio',
      },
      {
        label: '复选框',
        dataIndex: 'checkbox',
        formItemProps: {},
        itemProps: {
          options: [
            { label: '1234', value: 1 },
            { label: '122', value: 2 },
            { label: '123', value: 3 },
            { label: '124', value: 4 },
            { label: '125', value: 5 },
            { label: '126', value: 6 },
            { label: '127', value: 7 },
          ],
        },
        type: 'checkbox',
      },
      {
        label: '时间选择框',
        dataIndex: 'datePicker',
        formItemProps: {},
        itemProps: {},
        type: 'datePicker',
      },
      {
        label: '时间区间选择框',
        dataIndex: 'rangePicker',
        formItemProps: {},
        itemProps: {},
        type: 'rangePicker',
      },
      {
        label: '时间区间选择框',
        dataIndex: 'rangePicker1',
        formItemProps: {},
        itemProps: {},
        type: 'rangePicker',
      },
      {
        label: '时间区间选择框',
        dataIndex: 'rangePicker2',
        formItemProps: {},
        itemProps: {
          showTime: true,
        },
        type: 'rangePicker',
        transform: (value: any) => {
          return {
            aa: value[0],
            bb: value[1],
          };
        },
      },
    ],
    onReset: (value: Record<string, any>) => {
      console.log('reset', value);
    },
    onFinish: (value: Record<string, any>) => {
      console.log('value111', value);
    },
  };
  return <SearchForm {...formConfig} />;
};

export default React.memo(SearchFormDemo);
