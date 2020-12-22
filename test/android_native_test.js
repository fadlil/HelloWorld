var expect = require('chai').expect;

var wd = require('wd');
var driver = wd.promiseChainRemote({
    host: 'localhost',
    port: 4723
});

var assert = require('assert');
describe('AWSDeviceFarmReferenceAppTest', function () {
    before(function () {
        this.timeout(300 * 1000);
        return driver.init();
    });

    after(function () {
        console.log("quitting");
    });

    it('test_app_is_loaded', async function () {
        const element = await driver.elementById("com.example.nesh.helloworld:id/change");
        expect(element).to.exist;
    });
});
