import './menu.css'

function Menu(){
    return(
        <div className="menu">
            <section className='perfis'>
                <img src="./assets/perfil.jpg" alt="perfil1"/>
                <img src="./assets/perfil.jpg" alt="perfil1"/>
            </section>
            <button>Editar Perfis</button>
            <section className='lista-caixa'>
            <ul className='lista-itens'>
                <li className='itens'>Minha Lista</li>
                <li className='itens'>Configurações do aplicativo</li>
                <li>Conta</li>
                <li>Avisos legais</li>
                <li>Ajuda</li>
                <li>Sair</li>
            </ul>
            </section>
        </div>
    )
}
export default Menu