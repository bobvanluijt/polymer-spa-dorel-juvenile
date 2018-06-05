const send = require('koa-send');
const Koa = require('koa');
const { resolve } = require('path');
// const redis = require('redis');

const app = new Koa();

const getLegacyBuild = (ua) => ua.match(/.*MSIE.*/) ? './build/es5' : './build/ie11';

const userAgentParser = async (ctx, next) => {
  const ua = ctx.request.header['user-agent'];
  ctx.state.build = ua.match(/.*(MSIE|Trident|Samsung).*/)
      ? getLegacyBuild(ua)
      : './build/es6';
  await next();
};

const sendStaticFiles = async (ctx, next) => {
  let done = false;
  if (ctx.method === 'HEAD' || ctx.method === 'GET') {
    try {
      done = await send(ctx, ctx.path, {
        root: resolve(ctx.state.build)
      });
    } catch (err) {
      if (err.status !== 404) {
        throw err
      }
    }
  }
  if (!done) {
    await next();
  }
};

const sendStaticFile = (file) => async ctx => {
  await send(ctx, ctx.state.build + file);
};

app.use(userAgentParser);
app.use(sendStaticFiles);
app.use(sendStaticFile('/index.html'));

app.listen(8080);
