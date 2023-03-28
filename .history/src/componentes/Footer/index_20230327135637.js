import icons from './footer.json'
function Footer(){
    return(
        <footer className='rodape'>
            {
                icons.map(icon =>(
                    <img src={icon.imagem} alt='icones' />
                ))
            }
      </footer>
    )
}

export default Footer