/*
 * @Author: liusuyun
 * @Date: 2022-01-27 19:32:37
 * @LastEditors: liusuyun
 * @LastEditTime: 2022-04-28 14:29:12
 * @Description:
 */
import React, { useEffect, useState } from 'react';
import { TreeSearch } from 'sy-react-components';
import { PlusCircleFilled } from '@ant-design/icons';

const TreeSelectDemo: React.FC = () => {
  const fieldNames = {
    key: 'id',
    title: 'deptName',
  };
  const [treeData, setTreeData] = useState<any[]>([]);
  const changeTreeD = (data: any[] = []) => {
    data.forEach((item) => {
      item.key = item.id;
      item.title = (
        <div>
          <span>
            {item.deptName}
            <PlusCircleFilled title="添加" />
          </span>
        </div>
      );
      if (item.children) {
        changeTreeD(item.children);
      }
    });
    return data;
  };
  const sourceData = [
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
  useEffect(() => {
    setTreeData(changeTreeD(sourceData));
  }, []);
  return (
    <>
      <TreeSearch treeData={treeData} isSelfRender={true} fieldNames={fieldNames} parentId={0} />
    </>
  );
};

export default TreeSelectDemo;
