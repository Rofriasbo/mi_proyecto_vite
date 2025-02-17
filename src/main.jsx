import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.jsx'
//import PromesasBasicas from './Functions/basic'
import MyFetchAPIsp from './Functions/MyFetchAPIs'
//import MyPromisesRace from './Functions/MyPromisesRace'
//import MyPromisesAll from './Functions/MyPromisesAll'
//import MyPromises from './Functions/MyPromises'
//import PromesasEnCadena from './Functions/PromesasEnCadena'
//import MyFetchAPIsBlob from './Functions/MyFetchBlob'
//import MyFetchAPIsp from './Functions/MyFetchPut'
//import MyFetchAPIsp from './Functions/MyFetchPost'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*<App />*/},
    <MyFetchAPIsp/>
  </StrictMode>,
  
)
