import './App.css';
import Title from './components/Auto-repair-section/Title-repair';
import Client from './components/Clients-section/Client';
import Footer from './components/Footer/Footer';
import Header from './components/Header-section/Header';
import Hero from './components/Hero-section/Hero';
import Info from './components/Info-icon-section/Info';
import Logo from './components/Logos-section/Logo';
import Owner from './components/Owner-section/Owner';
import Repair from './components/Repairs/Repair';
import Step from './components/Step/Step';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Title/>
      <Repair/>
      <Owner/>
      <Info/>
      <Step/>
      <Client/>
      <Logo/>
      <Footer/>
    </div>
  );
}

export default App;
