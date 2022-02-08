import { createLogger, format, transport, transports } from 'winston'

const levels = {
  error: 0,
  warn: 1,
  info: 2
}

export const logger = createLogger({
  defaultMeta: { service: 'Test logger' },
  levels: levels,
  format: format.combine(
    format.timestamp(),
    format.json()
  ),
  transports: [
    new transports.File({
      filename: 'error.log',
      level: 'error',
      dirname: 'logs',
      format: format.prettyPrint()
    }),
    new transports.File({
      filename: 'warn.log',
      level: 'warn',
      dirname: 'logs',
      format: format.prettyPrint()
    }),
    new transports.File({
      filename: 'info.log',
      level: 'info',
      dirname: 'logs',
      format: format.prettyPrint()
    })
  ],
  exceptionHandlers: [
    new transports.File({
      filename: 'exception.log',
      dirname: 'logs',
      format: format.prettyPrint()
    })
  ],
  rejectionHandlers: [
    new transports.File({
      filename: 'rejections.log',
      dirname: 'logs',
      format: format.prettyPrint()
    })
  ]
})

if (process.env.NODE_ENV !== 'production') {
  logger.add(new transports.Console({
    format: format.combine(format.colorize(), format.simple())
  }))
}
