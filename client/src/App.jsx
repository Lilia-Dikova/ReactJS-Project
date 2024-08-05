import { Routes, Route } from 'react-router-dom';

import Slider from './components/slider/Slider';
import AboutUs from './components/about-us/AboutUs';
import Login  from './components/users/Login';
import Register  from './components/users/Register';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Mood from './components/mood-generator/Mood';
import PostCatalog from './components/post-catalog/PostCatalog';
import PostDetails from './components/post-details/PostDetails';
import PostCreate from './components/post-create/PostCreate';
import Combined from './components/Combined';
import Test2 from './components/Playtime';

function App() {



  return (
    <>
        <Header/>
        <Routes>
          <Route path='/' element={<Slider />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/mood' element={<Mood />} />

          <Route path='/catalog' element={<PostCatalog />} />
          <Route path='/catalog/details/:postId' element={< PostDetails/>} />
          <Route path='/create' element={<PostCreate />} />

          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
        <Test2 />
        <Footer/>
      </>
  );
}

export default App;