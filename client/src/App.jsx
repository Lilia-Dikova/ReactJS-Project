import { Routes, Route } from 'react-router-dom';

import Slider from './components/slider/Slider';
import AboutUs from './components/about-us/AboutUs';
import Login from './components/users/Login';
import Register from './components/users/Register';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Mood from './components/mood-generator/Mood';
import PostCatalog from './components/post-catalog/PostCatalog';
import PostDetails from './components/post-details/PostDetails';
import PostCreate from './components/post-create/PostCreate';
import Combined from './components/Combined';
import Test2 from './components/Playtime';
import { useState } from 'react';
import { AuthContext } from './contexts/AuthContext';

function App() {

  const [authState, setAuthState] = useState({});

  const changeAuthData = (state) => {
    localStorage.setItem('accessToken', state.accessToken);
    setAuthState(state);
  }

  const contextData = {
    userId: authState._id,
    email: authState.email,
    accessToken: authState.accessToken,
    isAuthenticated: !!authState.email,
    changeAuthData,
  }

  return (
    <AuthContext.Provider value={contextData}>

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
      </Routes>
 
      <Footer />

    </AuthContext.Provider>
  );
}

export default App;