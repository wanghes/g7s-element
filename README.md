## 基于 element-ui 基础构建g7s前端的组件及样式，进行第二次开发组件，

深入element组件内部按项目需求修改交互逻辑

```shell
npm install g7s-element -S
```

## 快速开始
``` javascript
import Vue from 'vue'
import G7SElement from 'g7s-element'

Vue.use(G7SElement)
```
## 按需加载

### 按需引入的完整element-ui组件
```javascript
import {
  Pagination,
  Dialog,
  Autocomplete,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Input,
  InputNumber,
  Radio,
  RadioGroup,
  RadioButton,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Switch,
  Select,
  Option,
  OptionGroup,
  Button,
  ButtonGroup,
  Table,
  TableColumn,
  DatePicker,
  TimeSelect,
  TimePicker,
  Popover,
  Tooltip,
  Breadcrumb,
  BreadcrumbItem,
  Form,
  FormItem,
  Tabs,
  TabPane,
  Tag,
  Tree,
  Alert,
  Slider,
  Icon,
  Row,
  Col,
  Upload,
  Progress,
  Badge,
  Card,
  Rate,
  Steps,
  Step,
  Carousel,
  CarouselItem,
  Collapse,
  CollapseItem,
  Cascader,
  ColorPicker,
  Transfer,
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Loading,
  MessageBox,
  Message,
  Notification
} from 'g7s-element';
```

按需加载.balelrc设置
```shell
{
  "presets": [
    ["env", {
      "modules": false,
      "targets": {
        "browsers": ["> 1%", "last 2 versions", "not ie <= 8"]
      }
    }],
    "stage-2"
  ],
  "plugins": [
    [
      "component",
      {
        "libraryName": "g7s-element",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
```
## 非单文件组件按需加载
```javascript
import {
  Select,
  Button
  // ...
} from 'g7s-element'

Vue.component(Select.name, Select)
Vue.component(Button.name, Button)
```
## 单文件组件按需加载

```html
<template>
  <div class="hello">
    <h1>{{Button.name}}</h1>
    <el-button>test</el-button>
  </div>
</template>

<script>
  import {
    Button
  } from 'g7s-element'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      Button: Button,
    }
  },
  components: {
    [Button.name]:Button
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

```


## LICENSE
[MIT](LICENSE)
