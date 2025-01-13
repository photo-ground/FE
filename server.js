const https = require('https');
const { parse } = require('url');
const next = require('next');
const fs = require('fs');

const dev = process.env.NODE_ENV !== 'production';
const PORT = 3000;
const hostname = 'localhost'; // or 커스텀 도매인
const app = next({ dev, hostname, PORT });
const handle = app.getRequestHandler();

const key = fs.readFileSync(`${__dirname}/localhost-key.pem`, 'utf8');
const cert = fs.readFileSync(`${__dirname}/localhost.pem`, 'utf8');

const httpsOptions = {
  key,
  cert,
};

app.prepare().then(() => {
  https
    .createServer(httpsOptions, (req, res) => {
      const parsedUrl = parse(req.url, true);
      handle(req, res, parsedUrl);
    })
    .listen(PORT, (err) => {
      if (err) throw err;
      console.log(`> Ready on https://${hostname}:${PORT}`);
    });
});
