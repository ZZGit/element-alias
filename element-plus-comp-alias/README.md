## 自定义Element Plus组件名前缀

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