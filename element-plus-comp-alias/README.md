## 自定义Element Plus组件名前缀

```
npm i element-plus-comp-alias
```

修改main.js
```js
import {createElementPlusCompAlias} from 'element-plus-comp-alias'

const ElementPlus = createElementPlusCompAlias('My')

app.use(ElementPlus)
```

使用
```html
<!-- 不影响element组件的用法 -->
<el-button>element button</el-button>
<!-- 自定义前缀 -->
<my-el-button>my button</my-el-button>
```

参数:
|名称|说明|默认值|
|-|-|-|
|prefix|要修改的组件名前缀||
|mode|修改模式; append: 新的前缀追加在原来的组件名前面；replace:新的前缀替换掉原来的组件名前缀 |append|

举例：

mode='append'
```js
// 配置
const ElementPlus = createElementPlusCompAlias('My')
// 等价 createElementPlusCompAlias({prefix: 'My', mode: 'append'})
```
```html
<!-- 组件使用 -->
<my-el-button>my button</my-el-button>
```

mode='replace'
```js
// 配置
const ElementPlus = createElementPlusCompAlias({prefix: 'My', mode:'replace'})
```
```html
<!-- 组件使用, 前缀'my'替换了原来的'el' -->
<my-button>my button</my-button>
```