import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Product from './components/Product.tsx'
import Input from   './components/Input.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Input/>
    <Product/>
  </StrictMode>,
)
