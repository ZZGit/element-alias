# 自定义Element组件名前缀

## Element Plus 组件

```
npm i element-plus-comp-alias
```

main.js
```js
import {createElementPlusCompAlias} from 'element-plus-comp-alias'

const ElementPlus = createElementPlusCompAlias('my')

app.use(ElementPlus)
```

使用
```html
<!-- 不影响element组件的用法 -->
<el-button>element button</el-button>
<!-- 自定义前缀 -->
<my-button>my button</my-button>
```

## Element UI 组件

```
npm i element-ui-comp-alias
```

main.js
```js
import {createElementUiCompAlias} from 'element-plus-comp-alias'

const ElementUI = createElementUiCompAlias('my')

Vue.use(ElementUI)
```

使用
```html
<!-- 不影响element组件的用法 -->
<el-button>element button</el-button>
<!-- 自定义前缀 -->
<my-button>my button</my-button>
```