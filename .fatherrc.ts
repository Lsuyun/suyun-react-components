/*
 * @Author: liusuyun
 * @Date: 2022-01-27 19:32:37
 * @LastEditors: liusuyun
 * @LastEditTime: 2022-04-28 12:30:13
 * @Description:
 */

export default {
  entry: 'src/index.ts',
  cjs: 'babel',
  esm: 'babel',
  umd: {
    name: 'mxcAntd',
  },
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
    ],
  ],
  cssModules: true,
  lessInBabelMode: true,
};
