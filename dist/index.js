/*!
 * name: @jswork/next-object-operator
 * description: Object set/get/sets/gets and other operator.
 * homepage: https://github.com/afeiship/next-object-operator
 * version: 1.0.1
 * date: 2021-01-27 16:57:29
 * license: MIT
 */

(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var isPlainObject = nx.isPlainObject || require('@jswork/next-is-plain-object');
  var MSG_PLAIN_ERR = 'Must be plain object.';

  var NxObjectOperator = nx.declare('nx.ObjectOperator', {
    methods: {
      init: function (inData) {
        !isPlainObject(inData) && nx.error(MSG_PLAIN_ERR);
        this.data = inData;
      },
      set: function (inPath, inValue) {
        nx.set(this.data, inPath, inValue);
      },
      sets: function (inObject) {
        nx.forIn(
          inObject,
          function (key, value) {
            this.set(key, value);
          },
          this
        );
      },
      get: function (inPath) {
        return nx.get(this.data, inPath);
      },
      gets: function () {
        return this.data;
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxObjectOperator;
  }
})();
