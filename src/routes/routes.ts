import { createBrowserRouter } from 'react-router'
import { NotFoundPage } from '../pages/404/NotFoundPage'
import { About } from './../pages/About/About'
import { Home } from './../pages/Home/Home'
import App from '../App'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: App(),
    children: [
      {
        index: true,
        element: Home(),
      },
      {
        path: '/about',
        element: About(),
      },
    ],
  },
  {
    path: '*',
    element: NotFoundPage(),
  },
])
