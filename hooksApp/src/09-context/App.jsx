import { Routes, Route } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { HomePage } from './pages/HomePage';
import { Login } from './pages/Login';
import { About } from './pages/About';
import { NotFound404 } from './pages/NotFound404';
import { useState } from 'react';

export const App = () => {
  
  const [links, setLinks] = useState([
    {
      label:      'Home Page',
      to:         '/'
    },
    {
      label:      'Login',
      to:         'login'
    },
    {
      label:      'About',
      to:         'about'
    }
  ]);
  
  return (
    <>
      <h1 className="my-0">App</h1>
      <Navbar links={links} className="my-0 justify-content-center"/>
      <hr className="mt-0"/>
      <Routes>
        <Route path="/"       element={ <HomePage/>     } exact/>
        <Route path="login"   element={ <Login/>        } exact/>
        <Route path="about"   element={ <About/>        } exact/>

        <Route path="/*"      element={ <NotFound404/>  }/>
      </Routes>
    </>
  )
}