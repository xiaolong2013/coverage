var add = require("../lib/add");
var assert = require('assert');
describe('Array', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            assert.equal(-1, [1, 2, 3].indexOf(4));
        });
    });
});


describe('sum', function() {
    describe('#add()', function() {
        it('1 add 2 should equal 3', function() {
            add(1,2).should.equal(3);
        });
    });
});