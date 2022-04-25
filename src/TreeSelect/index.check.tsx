/*
 * @Author: liusuyun
 * @Date: 2022-01-27 19:32:37
 * @LastEditors: liusuyun
 * @LastEditTime: 2022-04-25 10:21:13
 * @Description:
 */
import React, { useEffect } from 'react';
import { TreeSearch } from 'sy-react-components';

const TreeSelectDemo: React.FC = () => {
  const fieldNames = {
    key: 'id',
    title: 'deptName',
  };
  const treeData = [
    {
      deptName: '父级节点',
      id: '1',
      isEnd: 0,
      parentId: '0',
      children: [
        {
          deptName: '一级菜单',
          id: '2',
          isEnd: 0,
          parentId: '1',
          children: [],
        },
        {
          deptName: '二级菜单',
          id: '5',
          isEnd: 0,
          parentId: '1',
          children: [],
        },
      ],
    },
  ];
  return (
    <>
      <TreeSearch
        treeData={treeData}
        fieldNames={fieldNames}
        parentId={0}
        checkable={true}
        checkedKeysExt={['2']}
      />
    </>
  );
};

export default TreeSelectDemo;
