import { Routes, Route } from 'react-router-dom';

import Combined from './components/Combined';
import { ContactUs } from './components/ContactUs';
import Footer from './components/Footer';
import Header from './components/header/Header';
import Perfect from './components/Perfect';
import { Register } from './components/users/Register';
import Slider from './components/slider/Slider';
import { Login } from './components/users/Login';
import Mood from './components/mood-generator/Mood';
import Test from './components/Test';
import AboutUs from './components/AboutUs';
function App() {



  return (
    <>
        <Header/>
        <Routes>
          <Route path='/' element={<Slider />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/catalog' element={<Test />} />
          <Route path='/mood' element={<Mood />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
        <Footer/>
        {/* <Slider/>
        <Register/>
        <Login/>
        <ContactUs/>
        <Perfect/>
        <Combined/>
        <Mood />
        <Footer/>
        <AboutUs /> */}
      </>
  );
}

export default App;
