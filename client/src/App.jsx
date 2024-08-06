import { Routes, Route } from 'react-router-dom';

import Slider from './components/slider/Slider';
import AboutUs from './components/about-us/AboutUs';

import Register from './components/users/Register';
import Login from './components/users/Login';
import Logout from './components/users/Logout';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import Mood from './components/mood-generator/Mood';

import PostCatalog from './components/post-catalog/PostCatalog';
import PostDetails from './components/post-details/PostDetails';
import PostCreate from './components/post-create/PostCreate';


import { AuthContextProvider } from './contexts/AuthContext';

function App() {

  return (
    <AuthContextProvider>
      <Header />
      <Routes>
        <Route path='/' element={<Slider />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/mood' element={<Mood />} />

        <Route path='/catalog' element={<PostCatalog />} />
        <Route path='/catalog/details/:postId' element={< PostDetails />} />
        <Route path='/create' element={<PostCreate />} />

        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/logout' element={<Logout />} />

      </Routes>
      <Footer />
    </AuthContextProvider>
  );
}

export default App;