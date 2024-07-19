import Combined from './components/Combined';
import { ContactUs } from './components/ContactUs';
import Footer from './components/Footer';
import Header from './components/header/Header';
import Perfect from './components/Perfect';
import { Register } from './components/users/Register';
import Slider from './components/Slider';
import { Login } from './components/users/Login';
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
        <Footer/>
      </>
  );
}

export default App;