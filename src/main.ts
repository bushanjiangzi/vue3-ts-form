import { createApp } from 'vue'
import App from './App'

// import { createApp, defineComponent, h, reactive, ref } from 'vue'
// // import HelloWord from './components/HelloWorld.vue'

// import方式引入图片ts校验不会通过
// const logo = require('./assets/logo.png') // eslint-disable-line
// // createElement，h函数用于创建VNode(对createVNode函数的封装)
// const App = defineComponent({
//   // setup返回render函数
//   setup() {
//     const state = reactive({
//       name: 'jiang',
//       age: 18
//     })
//     const numberRef = ref(1)
//     setInterval(() => {
//       state.age += 1
//       numberRef.value += 1
//     }, 1000)
//     // const number = numberRef.value
//     return () => {
//       /**
//        * const number = numberRef.value
//        * 放到return的函数中才会生效
//        * 因为setup只会在初始化时执行，当reactive或ref定义的变量发生变化时虚拟dom树会重新渲染，
//        * 而setup并不会重新执行
//        */
//       const number = numberRef.value
//       return h('div', { id: 'app' }, [
//         h('img', {
//           alt: 'vue logo',
//           src: logo
//         }),
//         h('p', state.name + number)
//       ])
//     }
//   }
// })

createApp(App).mount('#app')
