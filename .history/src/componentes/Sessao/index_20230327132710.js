import img from './sessao.json'
function Sessao (titulo,imagem){
    return(
        <section className='container'>
<div>
    <p className='titulo-sessao'>{Novidades no Disney+}</p>
</div>

    {
        img.map(banners => (
            <img src={banners.imagem} alt='banners' className='imagem-sessao'/>
        ))
    }
   </section>
    )
}

export default Sessao