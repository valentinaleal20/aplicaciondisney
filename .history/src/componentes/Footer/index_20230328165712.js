import icons from './footer.json'
import './footer.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function Footer() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path=''>
                    <footer className='rodape'>
                        {
                            icons.map(icon => (
                                <img src={icon.imagem} alt='icones' className='icones' />
                            ))
                        }
                        <Link to='/menu'>
                            <img src='./assets/perfil.jpg' alt='perfil' className='perfil' />
                        </Link>

                    </footer>
                </Route>
            </Routes>
        </BrowserRouter>

    )
}

export default Footer