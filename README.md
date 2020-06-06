# next-object-operator
> Object set/get/sets/gets and other operator.

## installation
```bash
npm install -S @feizheng/next-object-operator
```

## apis
| api  | params       | description           |
| ---- | ------------ | --------------------- |
| get  | (path)       | Get value by path.    |
| set  | (path,value) | Set value by parh.    |
| gets | -            | Get the whole object. |
| sets | (object)     | Sets multiple values. |

## usage
```js
import NxObjectOperator from '@feizheng/next-object-operator';

const data = {};
const operator = new NxObjectOperator(data);

// operators
operator.set
operator.get
operator.sets
operator.gets
```
