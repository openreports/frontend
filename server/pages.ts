import routes from 'next-routes'

const pages = new routes();

pages
  .add('home', '/', 'index')

export default pages