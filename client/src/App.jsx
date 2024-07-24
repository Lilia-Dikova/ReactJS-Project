import { Routes, Route } from 'react-router-dom';
import Slider from './components/slider/Slider';
import AboutUs from './components/AboutUs';
import Test from './components/Test';
import Login  from './components/users/Login';
import Register  from './components/users/Register';
import Header from './components/header/Header';
import Footer from './components/Footer';
import Mood from './components/mood-generator/Mood';
import Perfect from './components/Perfect';

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