# vue3 更新概览

**github RFCS**

- 1 v-slot => #name
  _2.x_

```
  h(Comp, [
    h('div', {slot: 'foo'}, this.foo),
    h('div', {slot: 'bar', this.bar})
  ])
```

_3.0_

```
  h(Comp, null, {
    foo: () => h('div', this.foo),
    bar: () => h('div', this.bar)
  })
```

- 2 tree shaking  
  `import {api} from 'vue'`

- 3 main.js 的引入方式

```
  import { creatApp } from 'vue'
  import App from './App.vue'
  const app = createApp(App)
  app.mount(App, '#app')
```

- 4 新增 teleport  
  模态框

```
export default {
  template: `
    <div>
      <teleport to="#body">
        teleport api
      </teleport>
    </div>
  `
}
```

- 5 composition API

- 6 指令变化  
  v-model  
  `v-bind`、`.sync` 统一为`v-model`

![头像](../public/img/avator.jpg)

## vue3 中使用 ts

```
// 定义ts
interface Config {
  type: string
}
export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
  },
  // vue3使用ts推荐使用对象作为props传参
  props: {
    age: {
      type: Number as PropType<number>
    },
    config: {
      type: Object as PropType<Config>,
      required: true
    }
  },
  data () {
    return {
      name: 'jiang'
    }
  },
  mounted () {
    this.config.type
  }
})
```
