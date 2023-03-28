import {logo '../img/logo.png'
import './header.css'

function Header() {
    return (
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        </header>
    )
}

export default Header