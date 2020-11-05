<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" :age="`16`" />
  <div>{{ age }}</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
// 定义ts
interface Config {
  type: string
}

const propsType = {
  age: {
    type: Number as PropType<number>
  },
  config: {
    type: Object as PropType<Config>,
    required: true
  }
} as const // 只读，使required正确实现
export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  },
  // vue3使用ts推荐使用对象作为props传参
  props: propsType,
  data() {
    return {
      name: 'jiang'
    }
  },
  mounted() {
    this.config
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
