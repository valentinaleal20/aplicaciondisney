import './App.css'
import Banner from './componentes/Banner';
import Header from './componentes/Header';
import Studios from './componentes/Studios';

function App() {
  return (
    <div className="App">
   <Header />
   <Banner />
   <Studios />
   <sectio className='novidades'>
    <h3 className='titulo-sessao'>Novidades no Disney+</h3>
    <img src='' alt='img'/>
   </sectio>
    </div>
  );
}

export default App;
