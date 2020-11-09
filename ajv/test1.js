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
    test: {
      type: 'string',
      format: 'test'
    },
    love: {
      type: 'array',
      items: {
        type: 'string'
      }
    },
    isWorker: {
      type: 'boolean'
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
const validate = ajv.compile(schema)
const valid = validate({
  name: 'jiang',
  age: 18,
  email: 'grjiangzi@163.com',
  test: 'yes',
  love: ['eat', 'read'],
  isWorker: true
})
if (!valid) console.log(validate.errors)