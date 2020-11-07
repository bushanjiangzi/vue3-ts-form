<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" :age="`16`" />
    <div>{{ name }}</div>
    <div>{{ love }}</div>
    <div>{{ info.age }}</div>
    <div>{{ ageComputed }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, computed, watchEffect } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  },
  mounted() {
    // 可使用setup返回的变量
    console.log('mounted:', this.love)
  },
  setup() {
    let name = 'jiang'
    const info = reactive({
      age: 12
    })
    // ref: {value: xxx}
    const love = ref('read')
    setInterval(() => {
      name += 1
      info.age += 1
      // love.value += 1
    }, 1000)
    const ageComputed = computed(() => {
      return info.age * 2
    })
    // 副作用函数，watchEffect中调用的变量发生变化就会调用watchEffect()
    watchEffect(() => {
      console.log(info.age)
    })
    return {
      name,
      info,
      love,
      ageComputed
    }
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
