import logo from './../logo.svg';
import './../assets/styles/nav.css';

import Controls from './Controls';

const Header = function(){

    return(
        <header>
            <nav>
                <section className="logo">
                    <img src={logo} alt="Logo" />
                    <h1>Meme Generator</h1>
                </section>
                <section className="title">
                    React Course - Project 3
                </section>
            </nav>
            <Controls />
        </header>
    )
}

export default Header