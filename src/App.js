import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './containers/Home'
import Error404 from './containers/errors/Error404'

import Signup from './containers/Auth/Signup'
import Login from './containers/Auth/Login'
import Activate from './containers/Auth/Activate'


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* Error display */}
          <Route path='*' element={<Error404 />} />

          <Route exact path='/' element={<Home />} />

          {/* Auth */}
          <Route path='/register' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/activate/:uid/:token' element={<Activate />} />
          
        </Routes>
      </Router>
    </Provider>
  )
}

export default App;