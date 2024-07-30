import { Routes, Route } from 'react-router-dom';
import Slider from './components/slider/Slider';
import AboutUs from './components/about-us/AboutUs';
import Test from './components/catalog/Catalog';
import Login  from './components/users/Login';
import Register  from './components/users/Register';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Mood from './components/mood-generator/Mood';
import Perfect from './components/Perfect';
import Details from './components/details/Details';
import Combined from './components/Combined';
import Test2 from './components/Playtime';
import Create from './components/Create';
import Catalog from './components/catalog/Catalog';

function App() {



  return (
    <>
        <Header/>
        <Routes>
          <Route path='/' element={<Slider />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/catalog' element={<Catalog />} />
          <Route path='/catalog/:id' element={<Details />} />
          <Route path='/mood' element={<Mood />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/details' element={<Details />} />
          <Route path='/slider' element={<Test2 />} />
          <Route path='/create' element={<Create />} />
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