const fs = require('fs');
const http2 = require('http2');
const send = require('koa-send');
const Koa = require('koa');
const { resolve } = require('path');

const app = new Koa();

const sendUserAgentSpecificStaticFiles = async (ctx, next) => {
  let done = false;
  if (ctx.method === 'HEAD' || ctx.method === 'GET') {
    const ua = ctx.request.header['user-agent'];
    try {
      done = await send(ctx, ctx.path, {
        root: resolve(
            ua.match(/.*(MSIE|Trident|Samsung).*/)
                ? './build/es5'
                : './build/es6'
        )
      });
    } catch (err) {
      if (err.status !== 404) {
        throw err
      }
    }
  }
  if (!done) {
    await next()
  }
};

app.use(sendUserAgentSpecificStaticFiles);

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

// logger

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}`);
});

// response

app.use(async ctx => {
  await send(ctx, './build/es6/index.html');
});

const options = {
  key: fs.readFileSync(__dirname + '/cert/server.key'),
  cert:  fs.readFileSync(__dirname + '/cert/server.crt')
};

http2
    .createSecureServer(options, app.callback())
    .listen(3000, (err) => {
      if (err) {
        throw new Error(err);
      }
      console.log('Listening on port: ' + 3000 + '.');
    });