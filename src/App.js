import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route}  from 'react-router-dom'

import ErrorPage from './pages/ErrorPage.js'
import InstalationPage from './pages/InstalationPage.js'
import AllPage from './pages/AllPage.js'
import ComposantsPage from './pages/ComposantsPage.js'
import PropertiesPage from './pages/PropertiesPage.js'
import StylePage from './pages/StylePage.js'
import LifeCyclePage from './pages/LifeCyclePage.js'
import ContextPage from './pages/ContextPage.js'
import ReactRouterPage from './pages/ReactRouterPage.js'

import ReactRouter from './components/ReactRouter.js'
import Button from './components/Button.js'
import ReduxPage from './pages/ReduxPage.js'

import {Provider} from 'react-redux'
import store from './redux/store.js'

const router = createBrowserRouter(
  [
    {
      path: '/', 
      element: <AllPage/>,
      errorElement: <ErrorPage/>,
      
    },
    {
      path: '/instalation', 
      element: <InstalationPage/>,
      errorElement: <ErrorPage/>,
    },
    {
      path: '/composants', 
      element: <ComposantsPage/>,
      errorElement: <ErrorPage/>
    },
    {
      path: '/proprietes', 
      element: <PropertiesPage/>,
      errorElement: <ErrorPage/>
    },
    {
      path: '/style', 
      element: <StylePage/>,
      errorElement: <ErrorPage/>
    },
    {
      path: '/cycle-de-vie', 
      element: <LifeCyclePage/>,
      errorElement: <ErrorPage/>
    },
    {
      path: '/context', 
      element: <ContextPage/>,
      errorElement: <ErrorPage/>
    },
    {
      path: '/React-router', 
      element: <ReactRouterPage/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          path : 'react-router',
          element: <ReactRouter/>
        }
      ]
    },
    {
      path: '/redux', 
      element: <ReduxPage/>,
      errorElement: <ErrorPage/>,
    },
  ]
  
  // createRoutesFromElements(
	// 	<Route path='/' element={<AllPage/>} errorElement={<ErrorPage/>}/>
  // )
)

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  )
}

export default App