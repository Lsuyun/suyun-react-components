import React from 'react';
import { TreeSelect } from 'sy-react-components';

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
      <TreeSelect treeData={treeData} fieldNames={fieldNames} parentId={0} />
    </>
  );
};

export default TreeSelectDemo;
