
## 自定义Element UI组件名前缀

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