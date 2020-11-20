(function() {
  const NxObjectOperator = require('../src');

  describe('NxObjectOperator.methods', function() {
    test('set can change the value', function () {
      var data = {};
      var operator = new NxObjectOperator(data);
      operator.set('name', 'afei');
      expect(data).toEqual({ name: 'afei' });
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
