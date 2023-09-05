import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Residencies from './components/Residencies/Residencies';
import DCompanies from './components/companies/DCompanies';
import Value from './components/value/Value';
import Contact from './components/Contacts/Contact';
import GetStarted from './components/GetStarted/GetStarted';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='App'>
      <div>
        <div className='white-gradient' />
        <Header />
        <Hero />
      </div>
      <DCompanies />
      <Residencies />
      <Value />
      <Contact />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;
