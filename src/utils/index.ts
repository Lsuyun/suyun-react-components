/*
 * @Author: liusuyun
 * @Date: 2022-01-24 18:47:51
 * @LastEditors: liusuyun
 * @LastEditTime: 2022-01-27 18:22:18
 * @Description:
 */
// 数组去重
export const arrNotequal = (arr: any, key: any) => {
  const obj: any = {};
  const peno = arr.reduce((cur: any, next: any) => {
    // eslint-disable-next-line no-unused-expressions
    obj[next[key]] ? '' : (obj[next[key]] = true && cur.push(next));
    return cur;
  }, []);
  return peno;
};

/**
 * @description: 获取全部父级
 * @param {*} arr:遍历的数组 key:和id比对的key  id:当前唯一值 parentId:最高级父节点id
 * @return {*}  返回全部的父级 []
 */
export const getAllParentN = (arr: any, id: any, key: any, parentId = -1) => {
  let res: any = [];
  arr.forEach((item: any) => {
    if (+item[key] === +id) {
      res.push(item);
      if (+item.parentId !== +parentId) {
        res = res.concat(getAllParentN(arr, item.parentId, key, parentId));
      }
    }
  });
  return res;
};

/**
 * @description: 将平级数组转为tree
 * @param {*}  arr:数组 必须包含parentId parentId:最顶层父节点的parentId
 * @return {*}
 */
export const getTreeData = (arr: any, key = 'id', parentId = -1) => {
  arr.forEach((item: any) => {
    // eslint-disable-next-line no-prototype-builtins
    if (item.hasOwnProperty('parentId')) {
      item.parentN = item.parentId;
    }
  });

  const tree = arr.filter((father: any) => {
    const arrN = arr.filter((child: any) => {
      return +father[key] === +child.parentN;
    });
    if (arrN.length > 0) {
      father.children = arrN;
    }
    return +father.parentN === +parentId;
  });
  return tree;
};

// 扁平化数组
export const getFlatArr = (treeArr: any) => {
  let res: any = [];
  // eslint-disable-next-line array-callback-return
  treeArr.map((item: any) => {
    let data = {};
    data = { children: [], child: item.children };
    const finItem = { ...item, ...data };
    res.push(finItem);
    if (item.children && Array.isArray(item.children)) {
      res = res.concat(getFlatArr(item.children));
    }
  });
  return res;
};
