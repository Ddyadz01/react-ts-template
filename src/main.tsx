import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import { routes } from './routes/routes.ts'

import './index.scss'

createRoot(document.getElementById('root')!).render(<RouterProvider router={routes} />)
