const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const Strings = require('../../utils/Strings');

chai.use(sinonChai);

suite('Strings.tinyHash', () => {
  test('Results are consistent', () => {
    let str = 'foobarbaz';
    let result = Strings.tinyHash(str);

    for (let i = 0; i < 100; i++) {
      expect(Strings.tinyHash(str)).to.equal(result);
    }
  });

  test('No dupes in a large set', () => {
    let size = Math.pow(2, 16);
    let set = new Set();

    for (let i = 0; i < size; i++) {
      let value = Strings.tinyHash(i);
      if (set.has(value)) {
        throw new Error(`Set already contains value for ${i} : ${value}`);
      }
      set.add(value);
    }

    expect(set.size).to.equal(size);
  });

  test('Only alphanumeric results', () => {
    let size = Math.pow(2, 16);
    let rexp = /^[a-z0-9]+?/i;

    for (let i = 0; i < size; i++) {
      let value = Strings.tinyHash(i);
      if (rexp.test(value) !== true) {
        throw new Error(`Illegal chars in value for ${i} : ${value}`);
      }
    }
  });
});
