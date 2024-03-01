const request = require('supertest');
const http = require('http');
let server;

beforeAll(() => {
  // Initialise your server here (the example assumes the server code is in the same file)
  server = http.createServer((req, res) => {
    const reqUrl = new URL(req.url, `http://${req.headers.host}`).pathname;

    if (reqUrl === '/hello') {
      res.write('Hello Sciences-U !');
      res.end();
    } else {
      res.writeHead(404);
      res.end();
    }
  }).listen(1234);
});

afterAll((done) => {
  // Close your server after the tests
  server.close(done);
});

it("Async test for /hello endpoint", async () => {
  await request(server)
    .get("/hello")
    .expect(200)
    .then(response => {
      expect(response.text).toEqual("Hello Sciences-U !");
    });
});

it("Async test for non-existing endpoint", async () => {
  await request(server)
    .get("/non-existing")
    .expect(404);
});
