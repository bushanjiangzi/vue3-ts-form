// Node.js require:
const Ajv = require('ajv')

const schema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      maxLength: 10
    },
    age: {
      type: 'number'
    },
    email: {
      type: 'string',
      format: 'email'
    },
    love: {
      type: 'array',
      items: {
        type: 'string'
      }
    },
    isWorker: {
      type: 'boolean'
    },
    test: {
      type: 'string',
      format: 'test'
    },
    keyword: {
      type: 'string',
      keyword: false
    }
  },
  required: ['name', 'age'] // 必填项
}

const ajv = new Ajv() // options can be passed, e.g. {allErrors: true}
// 自定义format
ajv.addFormat('test', (data) => {
  console.log(data, '>>>---<<<')
  return data === 'yes'
})
// 自定义关键字
ajv.addKeyword('keyword', {
  validate(schema, data) {
    console.log(schema, data)
    if (schema === true)  return true
    else return data.length === 5
  },
  // 提取公共的限制条件
  macro() {
    return {
      minLength: 1
    }
  },
  compile(sch, parentSchema) {
    console.log(sch, parentSchema)
    // 返回的是函数
    return () => true
  },
  // 定义关键字的类型
  metaSchema: {
    type: 'boolean'
  }
})

const validate = ajv.compile(schema)
const valid = validate({
  name: 'jiang',
  age: 18,
  email: 'grjiangzi@163.com',
  test: 'yes',
  love: ['eat', 'read'],
  isWorker: true,
  keyword: 'jiang'
})
if (!valid) console.log(validate.errors)