/*
 * @Author: liusuyun
 * @Date: 2022-01-24 18:47:51
 * @LastEditors: liusuyun
 * @LastEditTime: 2022-01-24 18:47:52
 * @Description:
 */
// 数组去重
const arrNotequal = (arr, key) => {
  const obj = {};
  const peno = arr.reduce((cur, next) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
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
const getAllParentN = (arr, id, key, parentId = -1) => {
  let res = [];
  arr.forEach((item) => {
    if (item[key] == id) {
      res.push(item);
      if (item.parentId != parentId) {
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
const getTreeData = (arr, key = 'id', parentId = -1) => {
  arr.forEach((item) => {
    if (item.hasOwnProperty('parentId')) {
      item.parentN = item.parentId;
    }
  });

  const tree = arr.filter((father) => {
    const arrN = arr.filter((child) => {
      return father[key] == child.parentN;
    });
    if (arrN.length > 0) {
      father.children = arrN;
    }
    return father.parentN == parentId;
  });
  return tree;
};

// 扁平化数组
const getFlatArr = (treeArr) => {
  let res = [];
  treeArr.map((item) => {
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
