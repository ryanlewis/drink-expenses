import fetch from 'node-fetch'

const cost = 0.4
const apiKey = process.env.JSONBIN_API_KEY 
if (typeof apiKey === 'undefined') {
  throw Error('JSONBIN_API_KEY is undefined!')
}

const jsonBinAuthHeader = { 'authorization': `token ${apiKey}` } 

const post = async (data) => {
  return await fetch('https://jsonbin.org/me/expenses', {
    headers: jsonBinAuthHeader,
    method: 'POST',
    body: JSON.stringify(data)
  })
}

const get = async () => {
  const result = await fetch('https://jsonbin.org/me/expenses', { headers: jsonBinAuthHeader })
  const json = await result.json()
  return json
}

const buy = async () => {
  const current = await get()
  const newTotal = Object.assign({}, current, { total: (parseFloat(current.total) + cost).toFixed(2) })
  await post(newTotal)
  return newTotal
}

const pay = async (amount) => {
  const current = await get()
  const newTotal = Object.assign({}, current, { total: (parseFloat(current.total) - parseFloat(amount)).toFixed(2) })
  await post(newTotal)
  return newTotal
}

export default {
  get,
  buy,
  pay
}