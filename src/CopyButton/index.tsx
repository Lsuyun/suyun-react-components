import React, { useEffect, useState } from 'react';
import lodash from 'lodash';
// import { useDispatch } from 'dva';
import copy from 'copy-to-clipboard';

import { Tooltip } from 'antd';
import {
  CopyOutlined,
  LoadingOutlined,
  CheckOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons';
import type { CopyButtonType } from './typing';

// const { Paragraph } = Typography;

const CopyButton: React.FC<CopyButtonType> = (props) => {
  const {
    copyText = '', //如果有指定的要复制的数据，则优先复制这个数据
    request = null, //如果复制的数据是通过异步函数返回的，则使用这个方法
    successTips = '复制成功',
    failTips = '复制失败',
    tips = '复制',
    loadingRender = null,
    successRender = null,
    failRender = null,
    render = null,
    addonAfter = null,
    addonBefore = null,
  } = props;
  const filterProps = lodash.omit(props, [
    'copyText',
    'request',
    'loadingRender',
    'successRender',
    'failRender',
    'render',
  ]);

  // const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(2); //0-失败  1-成功  2-普通
  let copyId: any = undefined;

  const handleCopy = async () => {
    console.log('23124');
    if (copyText) {
      copy(copyText as string);
      setIsSuccess(1);
      copyId = setTimeout(() => {
        setIsSuccess(2);
      }, 2000);
      return false;
    }

    if (request) {
      setIsLoading(true);
      const { data, success } = await request();
      if (success) {
        copy(data as string);
        setIsSuccess(1);
        setIsLoading(false);

        copyId = setTimeout(() => {
          setIsSuccess(2);
        }, 2000);
      } else {
        setIsSuccess(0);
        setIsLoading(false);

        copyId = setTimeout(() => {
          setIsSuccess(2);
        }, 2000);
      }
    }
  };

  useEffect(() => {
    return () => {
      copyId && clearTimeout(copyId);
    };
  }, []);

  const renderCopyBtn = () => {
    const comStyle = {
      color: '#2d98ff',
      marginLeft: '4px',
    };

    if (isLoading) {
      // return <LoadingOutlined style={comStyle} />;
      return <>{loadingRender || <LoadingOutlined style={comStyle} />}</>;
    }

    if (isSuccess === 1) {
      return (
        <>
          {successRender || (
            <CheckOutlined
              style={{
                ...comStyle,
                color: '#73D13D',
              }}
            />
          )}
        </>
      );
    } else if (isSuccess === 0) {
      return (
        <>
          {failRender || (
            <ExclamationCircleOutlined
              style={{
                ...comStyle,
                color: 'red',
              }}
            />
          )}
        </>
      );
    }

    return (
      <>
        {addonBefore}
        {render ? (
          <span style={{ display: 'inline-block', cursor: 'pointer' }} onClick={handleCopy}>
            {render}
          </span>
        ) : (
          <CopyOutlined style={comStyle} onClick={handleCopy} />
        )}
        {addonAfter}
      </>
    );
  };

  return (
    <Tooltip
      title={
        isSuccess === 0
          ? failTips || '复制失败'
          : isSuccess === 1
          ? successTips || '复制成功'
          : tips || '复制'
      }
    >
      <span>{renderCopyBtn()}</span>
    </Tooltip>
  );
};

export default CopyButton;
