import routes from 'next-routes'

const pages = new routes();

pages
  .add('index', '/')
  .add('signup', '/signup')

export default pages
export const { Link } = pages;
