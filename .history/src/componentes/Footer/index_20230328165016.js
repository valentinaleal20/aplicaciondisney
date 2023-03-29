import icons from './footer.json'
import './footer.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function Footer() {
    return (
        <BrowserRouter>
            <Routes>
                <Route>
                    <footer className='rodape'>
                        {
                            icons.map(icon => (
                                <img src={icon.imagem} alt='icones' className='icones' />
                            ))
                        }
                        <Link><img src='./assets/perfil.jpg' alt='perfil' className='perfil' />
                        </link>

                    </footer>
                </Route>
            </Routes>
        </BrowserRouter>

    )
}

export default Footer