## 自定义Element UI组件名前缀

```
npm i element-ui-comp-alias
```

修改main.js
```js
import {createElementUICompAlias} from 'element-ui-comp-alias'

const ElementUI = createElementUICompAlias('My')

Vue.use(ElementUI)
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
const ElementUI = createElementUICompAlias('My')
// 等价 createElementUICompAlias({prefix: 'My', mode: 'append'})
Vue.use(ElementUI)
```
```html
<!-- 组件使用 -->
<my-el-button>my button</my-el-button>
```

mode='replace'
```js
// 配置
const ElementUI = createElementUICompAlias({prefix: 'My', mode:'replace'})
Vue.use(ElementUI)
```

```html
<!-- 组件使用, 前缀'my'替换了原来的'el' -->
<my-button>my button</my-button>
```