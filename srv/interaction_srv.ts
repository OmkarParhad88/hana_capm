import cds, { Service } from '@sap/cds'

export = cds.service.impl(function (this: Service) {
  const LOG = cds.log('srv')

  this.on('sleep', async () => {
    try {
      const dbQuery = `CALL "sleep"( ? )`
      const result = await cds.run(dbQuery)
      LOG.info(result)
      return result
    } catch (error) {
      LOG.error(error)
      return error
    }
  })
})
