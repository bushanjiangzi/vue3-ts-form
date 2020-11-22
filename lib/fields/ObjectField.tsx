import { defineComponent, inject } from 'vue'
import { FiledPropsDefine } from '../types'
import { SchemaFormContextKey } from '../context'
// import SchemaItem from '../SchemaItem'
// console.log(SchemaItem)

const schema = {
  type: 'object',
  properties: {
    name: {
      type: 'string'
    },
    age: {
      type: 'number'
    }
  }
}

export default defineComponent({
  name: 'ObjectField',
  props: FiledPropsDefine,
  setup() {
    const content = inject(SchemaFormContextKey)
    console.log(content)
    return () => {
      return <div>Object Field</div>
    }
  }
})
