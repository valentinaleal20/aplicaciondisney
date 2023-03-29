import icons from './footer.json'
import './footer.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function Footer(){
    return(
        <BrowserRouter>
        <Routes>

        <footer className='rodape'>
            {
                icons.map(icon =>(
                    <img src={icon.imagem} alt='icones' className='icones'/>
                ))
            }
            <img src='./assets/perfil.jpg' alt='perfil' className='perfil'/>

      </footer>
        </BrowserRouter>
        
    )
}

export default Footer