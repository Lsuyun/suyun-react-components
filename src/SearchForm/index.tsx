/*
 * @Author: liusuyun
 * @Date: 2022-04-26 11:00:37
 * @LastEditors: liusuyun
 * @LastEditTime: 2022-04-26 18:51:04
 * @Description:声明式form表单
 */
import React, { useEffect, useState } from 'react';
import {
  Form,
  Input,
  Button,
  Checkbox,
  Row,
  Col,
  Select,
  InputNumber,
  Radio,
  Switch,
  DatePicker,
} from 'antd';
import lodash from 'lodash';

const defaultFormConfig = {
  autoComplete: 'off',
};
const { Option } = Select;
const FormItem = Form.Item;
const { RangePicker } = DatePicker;
const inputPlaceholder = '请输入';
const selectPlaceholder = '请选择';
const SearchForm: React.FC<Record<string, any>> = (props) => {
  const [formR] = Form.useForm();
  const [buttonSpan, setButtonSpan] = useState(24);
  const {
    form = formR,
    gutter = [16, 16],
    colSpan = 6,
    resetText = '重置',
    searchText = '查询',
    searchColumns = [
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
    ],
    onReset = (value: Record<string, any>) => {
      console.log('reset', value);
    },
    onFinish = (value: Record<string, any>) => {
      console.log('value111', value);
    },
  } = props;

  const renderFormItems = (data: Record<string, any>) => {
    let contentRender = null;
    let options = [];
    let fieldNames = { label: '', value: '' };
    let labelF = 'label';
    let valueF = 'value';
    if (data.type === 'radio' || data.type === 'checkbox') {
      options = data?.itemProps?.options || [];
      fieldNames = data?.itemProps?.fieldNames || { label: 'label', value: 'value' };
      labelF = fieldNames?.label || 'label';
      valueF = fieldNames?.value || 'value';
    }
    switch (data.type) {
      case 'select':
        contentRender = (
          <Select placeholder={selectPlaceholder} {...data.itemProps}>
            {options.map((data: Record<string, any>) => (
              <Option {...data} value={data[valueF]} key={data[valueF]}>
                {data[labelF]}
              </Option>
            ))}
          </Select>
        );
        break;
      case 'inputNumber':
        contentRender = <InputNumber placeholder={inputPlaceholder} {...data.itemProps} />;
        break;
      case 'radio':
        contentRender = (
          <Radio.Group {...data.itemProps}>
            {options.map((data: Record<string, any>) => (
              <Radio {...data} value={data[valueF]} key={data[valueF]}>
                {data[labelF]}
              </Radio>
            ))}
          </Radio.Group>
        );
        break;
      case 'switch':
        contentRender = <Switch {...data.itemProps} />;
        break;
      case 'checkbox':
        contentRender = (
          <Checkbox.Group {...data.itemProps}>
            {options.map((data: Record<string, any>) => (
              <Checkbox {...data} value={data[valueF]} key={data[valueF]}>
                {data[labelF]}
              </Checkbox>
            ))}
          </Checkbox.Group>
        );
        break;
      case 'datePicker':
        contentRender = <DatePicker placeholder={selectPlaceholder} {...data.itemProps} />;
        break;
      case 'rangePicker':
        contentRender = <RangePicker {...data.itemProps} />;
        break;
      default:
        contentRender = <Input placeholder={inputPlaceholder} {...data.itemProps}></Input>;
        break;
    }

    return contentRender;
  };
  const onFinishR = (values: Record<string, any>) => {
    let finishValue = values;
    searchColumns.forEach((ele: Record<string, any>) => {
      if (ele.type === 'rangePicker' && ele.transform) {
        let valueFormat = ele?.itemProps?.showTime ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD';
        if (ele?.itemProps?.valueFormat) {
          valueFormat = ele?.itemProps?.valueFormat;
        }
        let newValues = [
          values[ele.dataIndex][0].format(valueFormat),
          values[ele.dataIndex][1].format(valueFormat),
        ];
        let dataIndexObj = ele.transform(newValues);
        for (let key in dataIndexObj) {
          finishValue[key] = dataIndexObj[key];
        }
        finishValue = lodash.omit(finishValue, [ele.dataIndex]);
      }
    });
    onFinish?.(finishValue);
  };
  useEffect(() => {
    let allColSpan = 0;
    let columnsColNum = 0;
    let resetColSpan = 0;
    searchColumns.forEach((data: Record<string, any>) => {
      if (data.colSpan) {
        allColSpan = allColSpan + data.colSpan;
        columnsColNum = columnsColNum + 1;
      }
    });

    allColSpan = allColSpan + (searchColumns.length - columnsColNum) * colSpan;
    resetColSpan = 24 - (allColSpan % 24);
    if (resetColSpan >= 6) {
      setButtonSpan(resetColSpan);
    } else {
      setButtonSpan(24);
    }
  }, []);
  return (
    <>
      <Form
        {...defaultFormConfig}
        labelAlign="left"
        layout="inline"
        form={form}
        onFinish={onFinishR}
      >
        <Row gutter={gutter || [16, 16]}>
          {searchColumns
            ? searchColumns.map((data: any, index: number) => (
                <>
                  {data.hide ? null : (
                    <Col span={data?.formItemProps.colSpan || colSpan}>
                      <FormItem
                        {...data.formItemProps}
                        name={data.dataIndex}
                        label={data.label}
                        key={data.dataIndex}
                      >
                        {data.render ? data.render() : renderFormItems(data)}
                      </FormItem>
                    </Col>
                  )}
                </>
              ))
            : null}
          <Col span={buttonSpan} style={{ textAlign: 'right' }}>
            <Button
              style={{ marginRight: '16px' }}
              onClick={() => {
                form.resetFields();
                onReset?.();
              }}
            >
              {resetText || '重置'}
            </Button>
            <Button type="primary" htmlType="submit">
              {searchText || '查询'}
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default SearchForm;
