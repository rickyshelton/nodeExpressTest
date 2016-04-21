var expect = require("chai").expect;
var assert = require("chai").assert;

describe("Example Test Suite 1", function() {

  it('yes means yes', function(){
    assert.equal('yes','yes');
  })

  it('yes does not means no', function(){
    assert.notEqual('yes','no');
  })

});
