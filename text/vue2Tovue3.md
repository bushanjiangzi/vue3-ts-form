# vue3更新概览
**github RFCS**

* 1 v-slot => #name
*2.x*
```
  h(Comp, [
    h('div', {slot: 'foo'}, this.foo),
    h('div', {slot: 'bar', this.bar})
  ])
```

*3.0*
```
  h(Comp, null, {
    foo: () => h('div', this.foo),
    bar: () => h('div', this.bar)
  })
```

* 2 tree shaking  
`import {api} from 'vue'`

* 3 main.js的引入方式

```
  import { creatApp } from 'vue'
  import App from './App.vue'
  const app = createApp(App)
  app.mount(App, '#app')
```

* 4 新增teleport  
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


* 5 composition API

* 6 指令变化  
v-model  
`v-bind`、`.sync` 统一为`v-model`

![头像](../public/img/avator.jpg)