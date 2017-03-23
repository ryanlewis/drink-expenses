import koa from 'koa'
import _ from 'koa-route'

import store from './store'

const app = new koa()

app.use(_.get('/', async ctx => {
  ctx.body = await store.get()
}))

app.use(_.post('/buy', async ctx => {
  const total = await store.buy()
  ctx.body = total
}))

app.use(_.post('/pay/:amount', async (ctx, amount) => {
  const total = await store.pay(amount)
  ctx.body = total
}))

app.on('error', err => console.log(err))

const port = process.env.port || 1337

app.listen(port)
console.log(`Listening on port ${port}`)
