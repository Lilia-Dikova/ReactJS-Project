import { Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from './contexts/AuthContext';

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
import PostEdit from './components/post-edit/PostEdit';

import SiteGuardGuest from './components/common/SiteGuardGuest';
import SiteGuardUser from './components/common/SiteGuardUser';
import NotFound from './components/not-found/NotFound';
import PostOwned from './components/post-owned/PostOwned';


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

        <Route element={<SiteGuardGuest />}>
          <Route path='/catalog/edit/:postId' element={< PostEdit />} />
          <Route path='/create' element={<PostCreate />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/my-posts' element={<PostOwned />} />
        </Route>

        <Route element={<SiteGuardUser />} >
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Route>
        <Route path='/*' element={<NotFound />} />
      </Routes>
      <Footer />
    </AuthContextProvider >
  );
}

export default App;