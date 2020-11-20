/*!
 * name: @jswork/next-object-operator
 * description: Object set/get/sets/gets and other operator.
 * homepage: https://github.com/afeiship/next-object-operator
 * version: 1.0.0
 * date: 2020-11-20 17:49:34
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  var NxObjectOperator = nx.declare('nx.ObjectOperator', {
    methods: {
      init: function (inData) {
        this.data = inData;
      },
      set: function (inPath, inValue) {
        nx.set(this.data, inPath, inValue);
      },
      sets: function (inObject) {
        nx.forIn(
          inObject,
          function (key, value) {
            nx.set(this.data, key, value);
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
