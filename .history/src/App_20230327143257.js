import './App.css'
import Banner from './componentes/Banner';
import Footer from './componentes/Footer';
import Header from './componentes/Header';
import Sessao from './componentes/Sessao';
import Studios from './componentes/Studios';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Studios />
      <Sessao
        title='Novidades no Disney+'
      />
      <Sessao
        title='Tendências'
      />
       <Sessao
        title='Tendências'
      />
      <Footer />
    </div>
  );
}

export default App;
