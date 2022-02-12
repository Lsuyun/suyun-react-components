export default {
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
  cjs: 'rollup',
  esm: 'rollup', //为babel时打包出来的文件为es
};
