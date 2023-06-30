import nx from '@jswork/next';
import '@jswork/next-is-plain-object';

const MSG_PLAIN_ERR = 'Must be plain object.';

const NxObjectOperator = nx.declare('nx.ObjectOperator', {
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

if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = NxObjectOperator;
}

export default NxObjectOperator;
