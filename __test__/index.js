var assert = require('assert');
var GET = require("@aex/core").GET;
var aex = require("../src").aex;

describe('aex test', function () {

  describe('#index()', function () {
    it('should get index response', function (done) {

      GET(

        {
          hostname: '127.0.0.1',
          port: 8080,
          path: "/",
          method: "GET",
      }
      ).then((req) => {
        assert(req.text === "Hello world!");
        aex.server.close();
        done();
      });
    });
  });
});

