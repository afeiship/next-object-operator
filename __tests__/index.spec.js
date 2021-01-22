(function () {
  const NxObjectOperator = require('../src');

  describe('NxObjectOperator.methods', function () {
    test('set can change the value', function () {
      var data = {};
      var operator = new NxObjectOperator(data);
      operator.set('name', 'afei');
      expect(data).toEqual({ name: 'afei' });
    });

    test('!plain-object is not allowed', function () {
      var Class1 = class {};
      var data = new Class1();
      try {
        var operator = new NxObjectOperator(data);
      } catch (e) {
        expect(e.message).toBe('Must be plain object.');
      }
    });

    test('set dangerous property is allowed', function () {
      var data = {};
      var operator = new NxObjectOperator(data);
      operator.set('__proto__.polluted', 'Yes, its polluted.');
      expect(data.polluted).toEqual('Yes, its polluted.');
      expect({}.polluted).toEqual('Yes, its polluted.');
    });

    test('get should get the right value', function () {
      var data = {};
      var operator = new NxObjectOperator(data);
      operator.set('name', 'afei');
      expect(operator.get('name')).toBe('afei');
    });

    test('sets can set multiple values', function () {
      var data = {};
      var operator = new NxObjectOperator(data);
      operator.sets({ name: 'afei', age: 100 });
      expect(data.name).toBe('afei');
      expect(data.age).toBe(100);
    });

    test('gets should return the whole object', function () {
      var data = {
        name: 'afei',
        age: 100
      };
      var operator = new NxObjectOperator(data);
      expect(operator.gets()).toEqual({
        name: 'afei',
        age: 100
      });
    });
  });
})();
