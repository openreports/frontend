import path from 'path'
import express, { Express } from 'express'
import next from 'next'
import Server from 'next-server/dist/server/next-server'
import { HTTPHandler } from 'next-routes'

import pages from './pages'

const dev:boolean = process.env.NODE_ENV !== 'production';

const PORT:number = parseInt(process.env.PORT || '4000', 10)

const server:Express = express()

const app:Server = next({
  dev,
  dir: path.dirname(__dirname)
})

app.prepare().then(() => {

  const handler:HTTPHandler = pages.getRequestHandler(app)

  server.use(handler)

  server.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
  })
})