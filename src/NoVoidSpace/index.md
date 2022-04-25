<!--
 * @Author: liusuyun
 * @Date: 2022-04-25 17:57:38
 * @LastEditors: liusuyun
 * @LastEditTime: 2022-04-25 19:13:11
 * @Description:
-->

# NoVoidSpace

## 何时使用

当不确定后端返回的对应字段是否有值时就可直接使用该组件，该组件会在页面渲染时直接过滤掉 null || undefined || '' || NaN || {} || [] 等值，例如省市区的渲染：当前端这样编写代码时{province},{city},{area},当后端的 city 值返回为 null 或者 undefined 时，页面就会渲染为"province，，area"，这样的显示就会没那么友好。

## 代码演示

<code src="./index.test.tsx"></code>

<API src="./index.tsx"></API>
