<!--
 * @Author: liusuyun
 * @Date: 2022-01-26 15:51:01
 * @LastEditors: liusuyun
 * @LastEditTime: 2022-01-26 22:57:59
 * @Description:
-->

# TreeSelect

## 何时使用

文件夹，组织架构等树形结构的控件，样式的体现和 antD 的 Tree 树形控件一致，在 Tree 树形控件的基础上将“搜索直接带出其所有上级”的功能封装在组件中了

## 代码演示

最简单的用法：树形结构的样式非自定义样式 <code src="./index.test.tsx"></code>

树形结构的渲染使用自定义的样式 isSelfRender={true} <code src="./index.test1.tsx"></code>

树形结构的渲染使用自定义的样式 checkable={true} checkedKeysExt={[2]} <code src="./index.check.tsx"></code>

## API

### props

| 参数 | 说明 | 类型 | 默认值 |
| :-- | --: | :-: | :-: |
| treeData | treeNodes 数据 | array | [] |
| checkable | 节点前添加 Checkbox 复选框 | Boolean | false |
| fieldNames | 自定义节点 title、key 的字段,注：children 字段不能自定义 | object | {key:'key',title:'title'} |
| parentId | 树形结构的数据中最顶级数据的 id | string/number | -1 |
| checkedKeysExt | 默认选中复选框的树节点 | string[]/number[] | - |
| checkStrictly | checkable 状态下节点选择完全受控（父子节点选中状态不再关联） | Boolean | false |
| isSelfRender | 单元格 | 单元格 | 单元格 |
| onCheck | 点击复选框触发 | function(checkedKeysExt) | 单元格 |
| onSelect | 点击树节点触发 | function(selectedNodes) | - |
