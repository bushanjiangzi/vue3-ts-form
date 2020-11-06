import { createApp } from 'vue'
import App from './App.vue'

// import { createApp, defineComponent, h } from 'vue'
// import HelloWord from './components/HelloWorld.vue'

// // import方式引入图片ts校验不会通过
// const logo = require('./assets/logo.png') // eslint-disable-line
// // createElement，h函数用于创建VNode(对createVNode函数的封装)
// const App = defineComponent({
//   render() {
//     return h('div', { id: 'app' }, [
//       h('img', {
//         alt: 'vue logo',
//         src: logo
//       }),
//       h(HelloWord, {
//         msg: 'Welcome to Your Vue.js + TypeScript App',
//         age: 12
//       })
//     ])
//   }
// })

createApp(App).mount('#app')
