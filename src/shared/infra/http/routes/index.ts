import { sz } from '@shared/infra/services/sz'
import { Router } from 'express'

const routes = Router()

routes.get('/', (req, res) => { res.send('Hello World') })

routes.post('/rejection', async (req, res) => {
  const p = new Promise((resolve, reject) => {
    setTimeout(() => {
      const isItFulfilled = false
      isItFulfilled ? resolve('!Resolved') : reject('!Rejected')
    }, 1000)
  })

  p.then(result => console.log(result))
  p.catch(error => console.log(error))

  res.send('Rejection')
})

routes.post('/exception', async (req, res) => {
  const result = sz.post('/auth/login')

  return res.send('Exception')
})

export { routes }
