import logo from './../logo.svg';
import './../assets/style/nav.css';

const Nav = function(){
    return (
        <nav>
            <section>
                <img src={logo} alt="Logo Goes Here" />
                <h1>ReactFacts</h1>
            </section>
            <section>
                <div className="link__container">
                    <label><a href="home.html">Home</a></label>
                    <label><a href="#home">About</a></label>
                    <label><a href="#about">Contact</a></label>
                </div>
            </section>
        </nav>
    )
}

export default Nav