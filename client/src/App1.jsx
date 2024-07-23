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
function App() {


  return (
    <>
        <Header/>
        <Slider/>
        <Register/>
        <Login/>
        <ContactUs/>
        <Perfect/>
        <Combined/>
        <Mood />
        <Footer/>
      </>
  );
}

export default App;
