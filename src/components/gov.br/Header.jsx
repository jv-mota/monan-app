import './css/core.css'
import './css/index.css'
import Gov from './img/govbr-logo.png'

const Header = () => {
    return (
        <>
        {/* INÍCIO - HEADER */}
        {/* header-gov.br */}
        <header className="br-header">

            <div className="container-lg">

                <div className="header-top">

                    <div className="header-logo">

                        <a href="https://www.gov.br/pt-br">
                            <img src={Gov} alt="Govbr-logo" />
                        </a>

                        <span className="br-divider vertical mx-half mx-sm-1"></span>

                        <div className="header-sign">Ministério da Ciência, Tecnologia e Inovação</div>

                    </div>

                    <div className="header-actions">

                        <div className="header-links dropdown">

                            <button className="br-button circle small" type="button" data-toggle="dropdown" aria-label="Abrir Acesso Rápido">
                                <i className="fas fa-ellipsis-v" aria-hidden="true"></i>                                
                            </button>

                            <div className="br-list">

                                <div className="header">
                                    <div className="title">Acesso Rápido</div>
                                </div>

                                <a className="br-item" href="https://www.gov.br/pt-br/orgaos-do-governo">Órgãos do Governo</a>
                                <a className="br-item" href="https://www.gov.br/acessoainformacao/pt-br">Acesso à Informação</a>
                                <a className="br-item" href="http://www4.planalto.gov.br/legislacao">Legislação</a>
                                <a className="br-item" href="https://www.gov.br/governodigital/pt-br/acessibilidade-digital">Acessibilidade</a>

                            </div>

                        </div>

                     {/*    <div className="invisivel-pequeno desaparece-medio desaparece-grande">
                            
                            <div className="header-sign-in">
                                
                                <button className="br-sign-in small" type="button" data-trigger="login">
                                    <i className="fas fa-user" aria-hidden="true"></i>
                                </button>

                            </div>

                            <div className="header-avatar"></div>

                        </div>
 */}
                    </div>

                </div>

                <div className="header-bottom">

                    <div className="header-menu">

                        <div className="header-info">

                            <a href="/">
                                <div className="header-title" style={{ color: '#333', fontSize: '24px', fontWeight: '600' }}>
                                    MONAN - Modelo para Previsão dos Oceanos, Superfícies Terrestres e Atmosfera
                                </div>
                                <div className="header-subtitle" style={{ color: '333', fontSize: '18px' }}>
                                    CGCT / DIMNT
                                </div>
                            </a>
                        </div>

                    </div>

                </div>

            </div>

        </header>
        
        {/* navegação-gov.br */}
        <nav className="navbar navbar-expand-lg bg-branco" aria-label="Tenth navbar example">

            <div className="container-fluid">

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample01" aria-controls="navbarsExample01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-between" id="navbarsExample01">

                    <ul className="navbar-nav container-lg">

                        <li className="nav-item">
                            <a className="nav-link" href="http://previsaonumerica.cptec.inpe.br/" target="_blank" style={{ paddingLeft: '0px' }}>Previsão Numérica de Tempo</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="http://clima.cptec.inpe.br/" target="_blank">Clima</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="https://subsazonal.cptec.inpe.br/" target="_blank">Subsazonal</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="https://sazonal.cptec.inpe.br/" target="_blank">Sazonal</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="http://tempo.cptec.inpe.br/" target="_blank">Nowcasting</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="http://satelite.cptec.inpe.br/home/novoSite/index.jsp" target="_blank">Satélite</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="http://ondas.cptec.inpe.br/" target="_blank">Ondas</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="https://bacias.cptec.inpe.br/" target="_blank">Bacias</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="http://meioambiente.cptec.inpe.br/" target="_blank">Qualidade do Ar</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="http://inpe.br/posgraduacao/met/" target="_blank">Pós Graduação</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="index.html">Monan</a>
                        </li>

                    </ul>

                </div>

            </div>

        </nav>
        {/* FIM - HEADER */}       
        </>
    );
}

export default Header;
