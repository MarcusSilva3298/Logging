import { logger } from '@shared/infra/logger/logger'
import { app } from './app'

const port = 8000

app.listen(port, () => {
  console.log(`Server listening in port ${port}! 🚀`)

  logger.info('infor test')
  logger.warn('alert test')
  logger.error('error test')
})
