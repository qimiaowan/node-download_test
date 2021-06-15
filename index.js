const Koa = require("koa");
const fs = require("fs")
const os = require('os');
const Router = require('koa-router')
const app = new Koa();
const router = new Router();
const ip = os.networkInterfaces()['WLAN'][1].address

router.get('/', (ctx)=> {
  ctx.body = '你好！！！'
})

router.get('/aa', async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', '*')
  ctx.set('Content-Type', 'application/pdf')
  ctx.set(
    'Content-Disposition',
    `attachment; filename=${encodeURIComponent('nhn')}.pdf`
  )
  const file = fs.readFileSync('./a.pdf')
  ctx.body = file
});


app.use(router.routes());

app.listen(3333, () => {
  console.log('http://localhost:' + 3333)
  console.log('http://'+ ip+':' + 3333)
})
