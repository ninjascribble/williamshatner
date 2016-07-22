const expect = require('chai').expect;

suite('blanket "is it working" tests');

test('ok is ok', () => {
  expect(true).to.equal(true);
});

test('not ok is not ok', () => {
  expect(false).to.equal(false);
});
