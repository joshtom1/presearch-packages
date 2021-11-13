'use strict';

// eslint-disable-next-line import/no-extraneous-dependencies
const test = require('ava');
const { getQty, MAX, MIN } = require('../search-help');

test('Get qty: test 1', (t) => t.is(getQty('5 btc').qty, 5));
test('Get qty: test 2', (t) => t.is(getQty('btc to ltc').qty, 1));
test('Get qty: test 3', (t) => t.is(getQty('42').qty, 1));
test('Get qty: test 4', (t) => t.is(getQty('42 btc').qty, 42));
test('Get qty: test 5', (t) => t.is(getQty(' ').qty, 1));
test('Get qty: test 6', (t) => t.is(getQty('123px btc').qty, 1));
test('Get qty: test 7', (t) => t.is(getQty('shiba btc').qty, 1));
test('Get qty: test 8', (t) => t.is(getQty('1e10000 btc').qty, MAX));
test('Get qty: test 9', (t) => t.is(getQty('0 btc').qty, 1));
test('Get qty: test 10', (t) => t.is(getQty('-4 btc').qty, 1));
test('Get qty: test 11', (t) => t.is(getQty('0x10 btc').qty, 1));
test('Get qty: test 12', (t) => t.is(getQty('0010 btc').qty, 10));
test('Get qty: test 13', (t) => t.is(getQty('Infinity btc').qty, 1));
test('Get qty: test 14', (t) => t.is(getQty('NaN btc').qty, 1));
test('Get qty: test 15', (t) => t.is(getQty('false btc').qty, 1));
test('Get qty: test 16', (t) => t.is(getQty('\t\t btc').qty, 1));
test('Get qty: test 17', (t) => t.is(getQty('\n\t btc').qty, 1));
test('Get qty: test 18', (t) => t.is(getQty('1 btc').qty, 1));
test('Get qty: test 19', (t) => t.is(getQty('0b11111111 btc').qty, 1));
test('Get qty: test 20', (t) => t.is(getQty('0o377 btc').qty, 1));
test('Get qty: test 21', (t) => t.is(getQty('1e-8 btc').qty, 0.00000001));
test('Get qty: test 22', (t) => t.is(getQty('1e-9 btc').qty, MIN));
test('Get qty: test 23', (t) => t.is(getQty('0.00000001 btc').qty, 0.00000001));
test('Get qty: test 24', (t) => t.is(getQty('.00000001 btc').qty, 0.00000001));
test('Get qty: test 25', (t) => t.is(getQty('0.000000001 btc').qty, MIN));
test('Get qty: test 26', (t) => t.is(getQty('12345678901234567890 btc').qty, MAX));
test('Get qty: test 27', (t) => t.is(getQty('123456789.1234567890 btc').qty, 123456789.12345679));
test('Get qty: test 28', (t) => t.is(getQty('123.12.34 btc').qty, 1));
test('Get qty: test 29', (t) => t.is(getQty('123.00 btc').qty, 123));
test('Get qty: test 30', (t) => t.is(getQty('123.123456789 btc').qty, 123.12345679));
test('Get qty: test 31', (t) => t.is(getQty('123.123456785 btc').qty, 123.12345679));
test('Get qty: test 32', (t) => t.is(getQty('123.1234567849 btc').qty, 123.12345678));

test.todo('commas');
// test('Get qty: test 33', t => t.is(getQty('1,000.12 btc'), 1000.12));

test('Get qty: test 34', (t) => t.is(getQty('1,000.12,1 btc').qty, 1));
test('Get qty: test 35', (t) => t.is(getQty('123e+6 btc').qty, 123e+6));
test('Get qty: test 36', (t) => t.is(getQty('123456e2 btc').qty, 123456e2));
test('Get qty: test 37', (t) => t.is(getQty('+12 btc').qty, 12));
test('Get qty: test 38', (t) => t.true(getQty('5 btc').found));
test('Get qty: test 39', (t) => t.false(getQty('-5 btc').found));
test('Get qty: test 40', (t) => t.false(getQty('42').found));
