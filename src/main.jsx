import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/Routes.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.jsx'
import { Toaster } from 'sonner'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Provider store={store}>
      <RouterProvider router={router} />
      <Toaster position="top-right" richColors />
    </Provider>
  </StrictMode>,
)
