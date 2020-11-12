import { defineComponent, ref, Ref } from 'vue'
import MonacoEditor from './components/MonacoEditor'

// 引入样式
import { createUseStyles } from 'vue-jss'

function toJson(data: any) {
  return JSON.stringify(data, null, 2)
}
const schema = {
  type: 'string'
}

// 定义
const useStyle = createUseStyles({
  editor: {
    minHeight: 400,
    color: 'red'
  }
})

export default defineComponent({
  // setup返回render函数
  setup() {
    // 调用样式
    const classesRef = useStyle()
    const schemaRef: Ref<any> = ref(schema)
    const hanldCodeChange = (code: string) => {
      let schema: any
      try {
        schema = JSON.parse(code)
      } catch {
        console.log(1)
      }
      schemaRef.value = schema
    }
    return () => {
      const classes = classesRef.value
      const code = toJson(schemaRef.value)
      return (
        <div>
          <MonacoEditor
            class={classes.editor}
            code={code}
            onChange={hanldCodeChange}
            title="Schema"
          />
        </div>
      )
    }
  }
})
