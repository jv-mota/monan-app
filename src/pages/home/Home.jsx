import './home.css'
import Logotipo from '../../assets/logo-monan.png'

const Home = () => {
    return (
        /* home-section */
        <section className="home section" id="id">

            {/* bg-counter and bg-monan */}            
            <div className="home__counter">
                
                {/* bg-monan */}
                <div className="home__bg">

                    {/* container */}
                    <div className="home__container container grid">                          
                        
                        {/* context */}
                        <div className="home__content">

                            {/* INÍCIO DO HEADER */}
                            <header className="header">

                                {/* navigation */}
                                <nav className="nav">

                                    {/* logotipo */}
                                    <a href="#Home" className="nav__logo">
                                        <img src={ Logotipo } alt="Logotipo" />
                                    </a>

                                    {/* links */}
                                    <div className="nav__menu">
                                        <ul className="nav__list grid">
                                            
                                            {/* sobre */}
                                            <li className="nav__item">
                                                <a href="#About" className="nav__link"></a>
                                                About
                                            </li>

                                            {/* sobre */}
                                            <li className="nav__item">
                                                <a href="#About" className="nav__link"></a>
                                                About
                                            </li>

                                            {/* sobre */}
                                            <li className="nav__item">
                                                <a href="#About" className="nav__link"></a>
                                                About
                                            </li>

                                        </ul>
                                    </div>


                                </nav>     

                            </header>                          

                        </div>

                    </div>     
                            
                </div>  

            </div>                 
               
        </section>
    )
}

export default Home;
