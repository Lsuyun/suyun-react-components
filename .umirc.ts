/*
 * @Author: liusuyun
 * @Date: 2022-01-24 17:15:50
 * @LastEditors: liusuyun
 * @LastEditTime: 2022-04-28 15:57:08
 * @Description:
 */
import { defineConfig } from 'dumi';
import { resolve } from 'path';

export default defineConfig({
  title: 'react-components',
  publicPath: process.env.NODE_ENV === 'production' ? '/suyun-react-components/' : '/',
  base: process.env.NODE_ENV === 'production' ? '/suyun-react-components/' : '/',
  hash: true, //开启之后打包的文件会带有哈希值
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  alias: {
    '@': resolve(__dirname, './src'),
    'sy-react-components': resolve(__dirname, './src/index.ts'),
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
  // more config: https://d.umijs.org/config
});
