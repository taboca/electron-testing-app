var Application = require('spectron').Application;
var assert = require('assert');
var electron= require('electron-prebuilt');

describe('application launch', function () {
  this.timeout(10000)

  beforeEach(function () {
    this.app = new Application({
      path: electron, args:['/Users/taboca/Desktop/all/05_clientes/2016/pti/latinoware-dev/electron/40_testing_app']
    })
    return this.app.start()
  })

  afterEach(function () {
    if (this.app && this.app.isRunning()) {
      return this.app.stop()
    }
  })

/*
  it('shows an initial window', function () {
    return this.app.client.getWindowCount().then(function (count) {
      assert.equal(count, 1)
    })
  })
*/

  it('wait page load', function () { 
     return this.app.client.waitUntilTextExists('#message', 'success', 10000).then(function () { 
	assert.equal(1,1);
     });
  });

})
