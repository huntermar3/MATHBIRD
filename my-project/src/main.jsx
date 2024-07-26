import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter} from 'react-router-dom'
import {RouterProvider} from 'react-router-dom'
import About from './routes/About.jsx'
import Grade from './routes/Grade.jsx'
import AllTopics from './routes/AllTopics.jsx'
import ASDecimals from './routes/ASDecimals.jsx'
import ASFractions from './routes/ASFractions.jsx'
import ASNegatives from './routes/ASNegatives.jsx'
import CombiningLikeTerms from './routes/CombiningLikeTerms.jsx'
import Graphing from './routes/Graphing.jsx'
import DivideBy2Digits from './routes/DivideBy2Digits.jsx'
import SolveEquations from './routes/SolveEquations.jsx'
import Proportions from './routes/Proportions.jsx'
import PEMDAS from './routes/PEMDAS.jsx'
import OneStep from './routes/OneStep.jsx'
import Slope from './routes/Slope.jsx'
import XY from './routes/XY.jsx'
import Volume from './routes/Volume.jsx'
import VarOnBothSides from './routes/VarOnBothSides.jsx'
import Rates from './routes/Rates.jsx'
import NegativeNums from './routes/NegativeNums.jsx'
import Resources from './routes/Resources.jsx'

const router = createBrowserRouter([
  {path: "/" , element: <App/>} ,
  {path: "/AllTopics" , element: <AllTopics/>},
  {path: "/about" , element: <About/>},
  {path: "/grade" , element: <Grade/>},
  {path: "/ASDecimals" , element: <ASDecimals/>} ,
  {path: "/ASFractions" , element: <ASFractions/>},
  {path: "/ASNegatives" , element: <ASNegatives/>},
  {path: "/CombiningLikeTerms" , element: <CombiningLikeTerms/>},
  {path: "/Graphing" , element: <Graphing/>} ,
  {path: "/DivideBy2Digits" , element: <DivideBy2Digits/>} ,
  {path: "/SolveEquations" , element: <SolveEquations/>} ,
  {path: "/Proportions" , element: <Proportions/>},
  {path: "/PEMDAS" , element: <PEMDAS/>} ,
  {path: "/OneStep" , element: <OneStep/>},
  {path: "/Slope" , element : <Slope/>},
  {path: "/XY" , element: <XY/>} ,
  {path: "/Volume" , element : <Volume/>},
  {path: "/VarOnBothSides" , element : <VarOnBothSides/>} ,
  {path: "/Rates" , element : <Rates/>} ,
  {path: "/NegativeNums" , element : <NegativeNums/>} ,
  {path: "/Resources" , element: <Resources/>}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>,
)
