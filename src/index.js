import { Aex, get } from "@aex/core";
class HelloWorld {
  @get("/")
  async index(req, res, scope) {
    res.end("Hello world!");
  }
}
const aex = new Aex();
aex.push(HelloWorld);
aex
.prepare()
.start(8080)
.then(() => {
  console.log("server running on port : 8080");
});

exports.aex = aex;