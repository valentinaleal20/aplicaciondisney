import icons from './footer.json'
import Menu from '../Menu'
import './footer.css'
import { useState } from 'react'


cons
function Footer(){
 


    return(
        <footer className='rodape'>
            {
                icons.map(icon =>(
                    <img src={icon.imagem} alt='icones' className='icones'/>
                ))
            }
            <img src='./assets/perfil.jpg' alt='perfil' className='perfil' onClick={Menu()}/>
      </footer>
    )
}

export default Footer