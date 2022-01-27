/*
 * @Author: liusuyun
 * @Date: 2022-01-26 15:50:35
 * @LastEditors: liusuyun
 * @LastEditTime: 2022-01-26 22:55:00
 * @Description:基于react的Tree插件封装的树搜索组件
 */
import React, { useState, useEffect, useMemo } from 'react';
import { Tree, Input } from 'antd';
import lodash from 'lodash';
import { arrNotequal, getAllParentN, getTreeData, getFlatArr } from '@/utils/index';
import { useDebounce } from '@/utils/hooks';
// import { useDebounce } from '@umijs/hooks';

/**
 * @description:
 * @param {*}treeData-树类型数据（title,key，children）  isSelfRender-是否自定义title  onSelect-点击，返回点击的数据 fieldNames（key，title）修改渲染字段
 * @return {*}
 */
export interface Props {
  [propName: string]: any;
}
const TreeSelect: React.FC<Props> = (props) => {
  const {
    treeData = [],
    checkable = false,
    onCheck,
    fieldNames = { key: 'key', title: 'title' },
    parentId = -1,
    onSelect,
    checkedKeysExt,
    checkStrictly = false,
    isSelfRender = false,
  } = props;
  const [checkedKeys, setCheckedKeys] = useState<any>([]);
  const [showTreeD, setShowTreeD] = useState(treeData);
  const [searchV, setSearchV] = useState('');
  // const [debouncedValue, setDebouncedValue] = useState('');
  const debouncedValue = useDebounce(searchV, 500); // 防抖
  // const [defaultExpandAll, setDefaultExpandAll] = useState(true);
  let allCheckedKeys: Array<any> = [];

  // 获取所有子级
  const getChildNode = (arr: any[], key: string) => {
    let res: Array<any> = [];
    arr.forEach((arrD) => {
      res.push(arrD[key]);
      if (arrD.children) {
        res = res.concat(getChildNode(arrD.children, key));
      }
    });
    return res;
  };

  const handleCheck = (checkedKeysValue: any, e: any) => {
    if (checkStrictly) {
      setCheckedKeys(checkedKeysValue.checked);
      return false;
    }
    const flattenTree = getFlatArr(treeData);
    let doId: any[] = [];
    if (e.node.children) {
      getFlatArr(e.node.children).forEach((ele: any) => {
        doId.push(ele[fieldNames.key] || ele.key);
      });
    }
    doId.push(e.node.key);
    if (e.checked) {
      allCheckedKeys = Array.from(new Set([...checkedKeys, ...doId]));
    } else {
      // 当取消选中时需要将上级的父节点清除掉，数据筛选时需要
      let childId: any[] = [];
      flattenTree.forEach((ft: any) => {
        // eslint-disable-next-line
        if (ft.id == e.node.key) {
          if (ft.child) {
            childId = getChildNode(ft.child, fieldNames.key || 'key');
          }
        }
      });
      doId = [...childId, ...doId];
      const parentNode = getAllParentN(flattenTree, e.node.key, fieldNames.key || 'key', parentId);
      parentNode.forEach((pd: any) => {
        doId.push(pd[fieldNames.key] || pd.key);
      });
      allCheckedKeys = checkedKeys.filter((item: any) => !doId.includes(item));
    }
    setTimeout(() => {
      setCheckedKeys(allCheckedKeys);
    });
    if (onCheck) {
      onCheck(allCheckedKeys);
    }
  };
  const changeTreeD = (data: any) => {
    data.forEach((ele: any) => {
      ele.key = ele[fieldNames.key];
      ele.title = ele[fieldNames.title];
      if (ele.children) {
        changeTreeD(ele.children);
      }
    });
  };

  const filterTreeF = () => {
    const flattenTree = getFlatArr(treeData);
    const searchArr: any[] = [];
    flattenTree.forEach((ele: any) => {
      if (ele[fieldNames.title].indexOf(searchV) !== -1) {
        searchArr.push(ele);
      }
    });
    // if (fieldNames) {
    //   flattenTree.forEach((ele: any) => {
    //     if (ele[fieldNames.title].indexOf(searchV) !== -1) {
    //       searchArr.push(ele);
    //     }
    //   });
    // } else {
    //   flattenTree.forEach((ele: any) => {
    //     if (ele.title.indexOf(searchV) !== -1) {
    //       searchArr.push(ele);
    //     }
    //   });
    // }
    let parentNode: any[] = [];
    searchArr.forEach((sA) => {
      parentNode = [
        ...parentNode,
        ...getAllParentN(flattenTree, sA.parentId, fieldNames.key || 'key', parentId),
      ];
    });
    const allArr = getTreeData(
      arrNotequal([...searchArr, ...parentNode], fieldNames.key || 'key'),
      fieldNames.key || 'key',
      parentId,
    );
    setShowTreeD(allArr);
    setTimeout(() => {
      setCheckedKeys(checkedKeys);
    });
  };

  // 搜索
  const onChange = (e: any) => {
    // lodash.debounce(() => {
    setSearchV(e.target.value);
    // }, 1000);
  };

  const handleSelect = (value: any, e: any) => {
    if (onSelect) {
      const flattenTree = getFlatArr(treeData);
      flattenTree.forEach((ele: any) => {
        // eslint-disable-next-line
        if (ele[fieldNames.key] == e.node.key) {
          const otherParams = lodash.omit(ele, ['children', 'child', 'key', 'title']);
          const obj = {
            children: ele.child,
            ...otherParams,
          };
          onSelect(obj);
        }
      });
      // if (fieldNames) {
      //   flattenTree.forEach((ele: any) => {
      //     // eslint-disable-next-line
      //     if (ele[fieldNames.key] == e.node.key) {
      //       onSelect(ele);
      //     }
      //   });
      // } else {
      //   flattenTree.forEach((ele: any) => {
      //     // eslint-disable-next-line
      //     if (ele.key == e.node.key) {
      //       onSelect(ele);
      //     }
      //   });
      // }
    }
  };
  useMemo(() => {
    if (!isSelfRender) {
      changeTreeD(treeData);
    }
    setShowTreeD(treeData);
  }, [treeData, isSelfRender]);

  useEffect(() => {
    if (checkedKeysExt) {
      setTimeout(() => {
        setCheckedKeys(checkedKeysExt);
      }, 10);
    }
  }, [checkedKeysExt]);

  useEffect(() => {
    filterTreeF();
    if (checkable) {
      allCheckedKeys = checkedKeys;
    }
  }, [debouncedValue]);

  return (
    <>
      <Input
        placeholder="搜索"
        onChange={(e) => onChange(e)}
        value={searchV}
        style={{ width: '80%', marginBottom: '20px' }}
      />
      {showTreeD.length ? (
        <Tree
          onCheck={handleCheck}
          checkedKeys={checkedKeys}
          onSelect={handleSelect}
          checkable={checkable}
          checkStrictly={checkStrictly}
          blockNode
          defaultExpandAll
          treeData={showTreeD}
        >
          {/* {renderNode(showTreeD)} */}
        </Tree>
      ) : (
        ''
      )}
    </>
  );
};
export default React.memo(TreeSelect);
