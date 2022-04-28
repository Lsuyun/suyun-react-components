/*
 * @Author: liusuyun
 * @Date: 2022-04-26 11:00:37
 * @LastEditors: liusuyun
 * @LastEditTime: 2022-04-28 21:29:07
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
  ConfigProvider,
} from 'antd';
import lodash from 'lodash';
import zhCN from 'antd/es/locale/zh_CN';
import type { SearchFormType } from './typing';

const defaultFormConfig = {
  autoComplete: 'off',
};
const { Option } = Select;
const FormItem = Form.Item;
const { RangePicker } = DatePicker;
const inputPlaceholder = '请输入';
const selectPlaceholder = '请选择';
const SearchForm: React.FC<SearchFormType> = (props) => {
  const [formR] = Form.useForm();
  const [buttonSpan, setButtonSpan] = useState(24);
  const {
    form = formR,
    gutter = [16, 16],
    colSpan = {
      xxl: { span: 6 },
      lg: { span: 12 },
      xl: { span: 8 },
      md: { span: 12 },
      sm: { span: 24 },
      xs: { span: 24 },
    },
    resetText = '重置',
    searchText = '查询',
    searchColumns = [],
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
      if (ele.type === 'rangePicker') {
        let valueFormat = ele?.itemProps?.showTime ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD';

        if (ele?.itemProps?.valueFormat) {
          valueFormat = ele?.itemProps?.valueFormat;
        }
        let newValues: any = [null, null];
        if (values[ele.dataIndex]) {
          newValues = [
            values[ele.dataIndex][0].format(valueFormat),
            values[ele.dataIndex][1].format(valueFormat),
          ];
          finishValue[ele.dataIndex] = newValues;
        } else {
          finishValue[ele.dataIndex] = null;
        }

        if (ele.transform) {
          let dataIndexObj = ele.transform(newValues);
          for (let key in dataIndexObj) {
            finishValue[key] = dataIndexObj[key];
          }
          finishValue = lodash.omit(finishValue, [ele.dataIndex]);
        }
      }
      if (ele.type === 'datePicker') {
        let valueFormat = ele?.itemProps?.showTime ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD';

        if (ele?.itemProps?.valueFormat) {
          valueFormat = ele?.itemProps?.valueFormat;
        }

        finishValue[ele.dataIndex] = values[ele.dataIndex]
          ? values[ele.dataIndex].format(valueFormat)
          : null;
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
      <ConfigProvider locale={zhCN}>
        <Form
          {...defaultFormConfig}
          labelAlign="left"
          layout="inline"
          form={form}
          onFinish={onFinishR}
        >
          <Row gutter={gutter || [16, 16]} wrap={true}>
            {searchColumns
              ? searchColumns.map((data: any, index: number) => (
                  <>
                    {data.hide ? null : (
                      <Col
                        lg={{ ...colSpan.lg, ...data?.formItemProps?.colSpan?.lg }}
                        xl={{ ...colSpan.xl, ...data?.formItemProps?.colSpan?.xl }}
                        sm={{ ...colSpan.sm, ...data?.formItemProps?.colSpan?.sm }}
                        md={{ ...colSpan.md, ...data?.formItemProps?.colSpan?.md }}
                        xs={{ ...colSpan.xs, ...data?.formItemProps?.colSpan?.xs }}
                        xxl={{
                          ...colSpan.xxl,
                          ...data?.formItemProps?.colSpan?.xxl,
                        }}
                      >
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
            <Col span={24} style={{ textAlign: 'right' }}>
              <Button
                style={{ marginRight: '16px' }}
                onClick={() => {
                  form.resetFields();
                  onReset?.();
                }}
              >
                {resetText}
              </Button>
              <Button type="primary" htmlType="submit" style={{ marginRight: '16px' }}>
                {searchText}
              </Button>
            </Col>
          </Row>
        </Form>
      </ConfigProvider>
    </>
  );
};

export default SearchForm;
