require('dotenv-flow').config()
import path from 'path'
import express, { Express } from 'express'
import next from 'next'
import Server from 'next-server/dist/server/next-server'

const dev:boolean = process.env.NODE_ENV !== 'production';

const PORT:number = parseInt(process.env.PORT || '4000', 10)

const server:Express = express()

const app:Server = next({
  dev,
  dir: path.dirname(__dirname)
})

app.prepare().then(() => {

  server.use((req, res) => {
    app.getRequestHandler()(req, res)
  })

  server.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
  })
})