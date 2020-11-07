import { defineComponent, reactive, ref } from 'vue'
const logo = require('./assets/logo.png') // eslint-disable-line
import HelloWorld from './components/HelloWorld.vue'

function renderHelloWorld(num: number) {
  return <HelloWorld age={num} />
}
export default defineComponent({
  // setup返回render函数
  setup() {
    const state = reactive({
      name: 'jiang',
      age: 18
    })
    const numberRef = ref(1)
    setInterval(() => {
      state.age += 1
      numberRef.value += 1
    }, 1000)
    return () => {
      const number = numberRef.value
      console.log(state.name)
      return (
        <div id="app">
          <img src={logo} alt="vue logo" title="vue logo" />
          <p>{state.name + number}</p>
          <input type="text" v-model={state.name} />
          <HelloWorld age={number} />
          {renderHelloWorld(12)}
        </div>
      )
    }
  }
})
