import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import MyObjects from './FuctionsDatos/MyObjects';
import { FormulariosHook } from './Components/FormulariosHook';


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <FormulariosHook/>
  </StrictMode>
);