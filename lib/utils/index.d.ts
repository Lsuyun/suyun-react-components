export declare const arrNotequal: (arr: any, key: any) => any;
/**
 * @description: 获取全部父级
 * @param {*} arr:遍历的数组 key:和id比对的key  id:当前唯一值 parentId:最高级父节点id
 * @return {*}  返回全部的父级 []
 */
export declare const getAllParentN: (arr: any, id: any, key: any, parentId?: number) => any;
/**
 * @description: 将平级数组转为tree
 * @param {*}  arr:数组 必须包含parentId parentId:最顶层父节点的parentId
 * @return {*}
 */
export declare const getTreeData: (arr: any, key?: string, parentId?: number) => any;
export declare const getFlatArr: (treeArr: any) => any;
