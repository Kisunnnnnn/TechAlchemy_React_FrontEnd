import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './components/authentication/login';
import PrivateRoute from './components/authentication/PrivateRoute';
import Signup from './components/authentication/Signup';
import Header from './components/Header';
import Home from './components/users/Home';
import WeatherData from './components/users/WeatherData';

function App() {
  return (
    <div className="App">
      <Router>
        <Fragment>
          <Header />
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/weatherData' element={<WeatherData />} />
            <Route path='/home' element={<PrivateRoute component={Home} />} />
          </Routes>
        </Fragment>
      </Router>
    </div>
  );
}

export default App;
