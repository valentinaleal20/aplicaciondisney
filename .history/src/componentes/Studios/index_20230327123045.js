import studio from './lista'

import './studios.css'

function Studios (){
    return (
        <section className='studios'>
   {studio.map(imagem => (
       <img src={imagem.imagem} alt='studio' className='studio' key='i'/>
       ))}
   </section>
    )
}

export default Studios