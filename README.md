# next-object-operator
> Object set/get/sets/gets and other operator.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-object-operator
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

## license
Code released under [the MIT license](https://github.com/afeiship/next-object-operator/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-object-operator
[version-url]: https://npmjs.org/package/@jswork/next-object-operator

[license-image]: https://img.shields.io/npm/l/@jswork/next-object-operator
[license-url]: https://github.com/afeiship/next-object-operator/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-object-operator
[size-url]: https://github.com/afeiship/next-object-operator/blob/master/dist/next-object-operator.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-object-operator
[download-url]: https://www.npmjs.com/package/@jswork/next-object-operator
