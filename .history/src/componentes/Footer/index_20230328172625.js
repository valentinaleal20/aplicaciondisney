import home from './assets/home.svg'
import search from './assets/search.svg'
import download from './assets/dowload.svg'
import './footer.css'
import { Link } from 'react-router-dom'

function Footer(){
    return(
        <footer className='rodape'>
            <Link to='/'>
            <img src={home} alt='perfil' className='perfil'/>
            </Link>
         
            <img src={search} alt='perfil' className='perfil'/>
            <img src={download} alt='perfil' className='perfil'/>
            <Link to='/menu'>
            <img src='./assets/perfil.jpg' alt='perfil' className='perfil'/>
            </Link>

      </footer>
    )
}

export default Footer