import './js/core.js'
import './js/core-init.js'

const Footer = () => {
    return (
        <>      
        {/* INÍCIO - FOOTER */}       
        {/* footer-gov.br */}
        <footer className="br-footer desaparece-medio desaparece-pequeno">
        
            <div className="container-lg">

                <div className="logo"><img
                    src="data:image/svg+xml,<svg id='Camada_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 374.8 135' style='enable-background:new 0 0 374.8 135;' xml:space='preserve'><style type='text/css'> .st0%7Bfill:%23FFFFFF;%7D%0A  </style><path class='st0' d='M40.2,84.8c8.9,0,16-7.5,16-18.7c0-8.1-4.8-17.2-16-17.2C30.9,48.9,26,57.1,26,67 C25.9,78.4,32.6,84.8,40.2,84.8z M80.5,95.5c0,29.8-14.5,39.5-43.8,39.5c-12,0-21.9-2.5-27.7-4.6l1.2-19.8c7.7,3.8,14.1,6,24.5,6 c14.5,0,22.3-6.8,22.3-21.1v-3.9h-0.3c-6,8.5-14.4,12.4-24.4,12.4C12.4,104,0,88.9,0,67.5c0-21.6,10.2-37.8,32.8-37.8 c10.7,0,19.4,5.9,24.7,14.8h0.2V31.4h22.7L80.5,95.5L80.5,95.5z'/><polygon class='st0' points='181.6,103.9 209.6,103.9 235.8,31.7 211.4,31.7 196.6,83.2 196.3,83.2 181.6,31.7 155.3,31.7 '/><path class='st0' d='M139,67.9c0-10.8-4.7-20.4-16.2-20.4s-16.2,9.6-16.2,20.4c0,10.7,4.7,20.2,16.2,20.2S139,78.5,139,67.9z M80.9,67.9c0-24,18.1-37.8,42-37.8s42,13.9,42,37.8c0,23.8-18.1,37.7-42,37.7C99,105.5,80.9,91.7,80.9,67.9z'/><path class='st0' d='M238.6,93.7c0,6.5-5.3,11.8-11.8,11.8S215,100.2,215,93.7s5.3-11.8,11.8-11.8C233.3,81.9,238.6,87.2,238.6,93.7 z'/><path class='st0' d='M281.1,49.2c-9.1,0-15.2,8-15.2,18.8c0,10.5,6.9,18.4,15.2,18.4c9.4,0,15.1-7.9,15.1-19.4 C296.2,57.5,290.8,49.2,281.1,49.2z M240.9,0H266v41h0.3c6.4-8,14.8-10.9,24.8-10.9c20,0,30.9,19,30.9,36.4 c0,21.3-11.5,39.1-33,39.1c-11.5,0-21.6-6.5-24.8-14.6h-0.3v12.9h-23L240.9,0L240.9,0z'/><path class='st0' d='M373.5,51.7c-2.8-0.8-5.5-0.8-8.5-0.8c-11.6,0-18.1,8.4-18.1,22.6V104H322V31.8h22.7v13.3h0.3 c4.3-9.1,10.5-15,21.3-15c2.9,0,6,0.4,8.5,0.8L373.5,51.7z'/></svg>"
                    alt="Imagem"/>
                </div>

                <div className="br-list horizontal" data-toggle="data-toggle" data-sub="data-sub">
                    
                    <div className="col-2">

                        <a className="br-item header">
                            <div className="content text-down-01 text-bold text-uppercase">Acesso à Informação</div>
                            <div className="support"><i className="fas fa-angle-down" aria-hidden="true"></i></div>
                        </a>

                        <div className="br-list"><span className="br-divider d-md-none"></span>

                            <a className="br-item" href="https://www.gov.br/inpe/pt-br/acesso-a-informacao/institucional">
                                <div className="content">institucional</div>
                            </a>

                            <a className="br-item" href="https://www.gov.br/inpe/pt-br/acesso-a-informacao/acoes-e-programas">
                                <div className="content">Ações e Programas</div>
                            </a>

                            <a className="br-item" href="https://www.gov.br/inpe/pt-br/acesso-a-informacao/participacao-social">
                                <div className="content">Participação Social</div>
                            </a>

                            <span className="br-divider d-md-none"></span>

                            <a className="br-item" href="https://www.gov.br/inpe/pt-br/acesso-a-informacao/auditorias">
                                <div className="content">Auditorias</div>
                            </a>

                            <span className="br-divider d-md-none"></span>

                            <a className="br-item" href="https://www.gov.br/inpe/pt-br/acesso-a-informacao/convenios-e-transferencias">
                                <div className="content">Convênios e Transferências</div>
                            </a>

                            <span className="br-divider d-md-none"></span>

                            <a className="br-item" href="https://www.gov.br/inpe/pt-br/acesso-a-informacao/receitas-e-despesas">
                                <div className="content">Receitas e Despesas</div>
                            </a>

                            <span className="br-divider d-md-none"></span>

                            <a className="br-item" href="https://www.gov.br/inpe/pt-br/acesso-a-informacao/licitacoes-e-contratos">
                                <div className="content">Licitações e Contratos</div>
                            </a>

                            <span className="br-divider d-md-none"></span>

                            <a className="br-item" href="https://www.gov.br/inpe/pt-br/acesso-a-informacao/servidores">
                                <div className="content">Servidores</div>
                            </a>

                            <span className="br-divider d-md-none"></span>

                            <a className="br-item" href="https://www.gov.br/inpe/pt-br/acesso-a-informacao/informacoes-classificadas">
                                <div className="content">Informações Classificadas</div>
                            </a>

                            <span className="br-divider d-md-none"></span>

                            <a className="br-item" href="https://www.gov.br/inpe/pt-br/acesso-a-informacao/servico-de-informacao-ao-cidadao-sic">
                                <div className="content">Serviço de Informação ao Cidadão - SIC</div>
                            </a>

                            <span className="br-divider d-md-none"></span>

                            <a className="br-item" href="https://www.gov.br/inpe/pt-br/acesso-a-informacao/perguntas-frequentes">
                                <div className="content">Perguntas Frequentes</div>
                            </a>

                            <span className="br-divider d-md-none"></span>

                            <a className="br-item" href="https://www.gov.br/inpe/pt-br/acesso-a-informacao/dados-abertos">
                                <div className="content">Dados Abertos</div>
                            </a>

                            <span className="br-divider d-md-none"></span>

                            <a className="br-item" href="https://www.gov.br/inpe/pt-br/acesso-a-informacao/cooperacoes-nacionais-e-internacionais">
                                <div className="content">Cooperações Nacionais e Internacionais</div>
                            </a>

                            <span className="br-divider d-md-none"></span>

                        </div>
                    
                    </div>

                    <div className="col-2">

                        <a className="br-item header">
                            <div className="content text-down-01 text-bold text-uppercase">Assuntos</div>
                            <div className="support"><i className="fas fa-angle-down" aria-hidden="true"></i></div>
                        </a>

                        <div className="br-list">
                            <span className="br-divider d-md-none"></span>

                            <a className="br-item" href="https://www.gov.br/inpe/pt-br/assuntos/ultimas-noticias">
                                <div className="content">Últimas Notícias</div>
                            </a>

                            <a className="br-item" href="https://www.gov.br/inpe/pt-br/assuntos/produtos">
                                <div className="content">Produtos</div>
                            </a>

                            <a className="br-item" href="https://www.gov.br/inpe/pt-br/assuntos/eventos">
                                <div className="content">Eventos</div>
                            </a>

                            <a className="br-item" href="http://antigo.inpe.br/posgraduacao/">
                                <div className="content">Capacitação Pós-Graduação</div>
                            </a>

                            <span className="br-divider d-md-none"></span>

                            <a className="br-item" href="https://www.gov.br/inpe/pt-br/assuntos/anuncio-de-oportunidades">
                                <div className="content">Anúncio de Oportunidades</div>
                            </a>

                            <span className="br-divider d-md-none"></span>

                        </div>

                    </div>

                    <div className="col-2">

                        <a className="br-item header">
                            <div className="content text-down-01 text-bold text-uppercase">Central de Conteúdo</div>
                            <div className="support"><i className="fas fa-angle-down" aria-hidden="true"></i></div>
                        </a>

                        <div className="br-list">

                            <span className="br-divider d-md-none"></span>

                            <a className="br-item" href="https://www.gov.br/inpe/pt-br/central-de-conteudo/cartilhas-educacionais">
                                <div className="content">Cartilhas Educacionais</div>
                            </a>

                            <a className="br-item" href="https://www.gov.br/inpe/pt-br/central-de-conteudo/publicacoes">
                                <div className="content">Publicações</div>
                            </a>

                            <a className="br-item" href="https://www.gov.br/inpe/pt-br/area-conhecimento/biblioteca">
                                <div className="content">Biblioteca On-Line</div>
                            </a>

                            <a className="br-item" href="http://www.youtube.com/inpemct">
                                <div className="content">Vídeos</div>
                            </a>

                        </div>

                    </div>

                    <div className="col-2">

                        <a className="br-item header">
                            <div className="content text-down-01 text-bold text-uppercase">Canais de Atendimento</div>
                            <div className="support"><i className="fas fa-angle-down" aria-hidden="true"></i></div>
                        </a>

                        <div className="br-list">

                            <span className="br-divider d-md-none"></span>

                            <a className="br-item" href="https://www.gov.br/inpe/pt-br/canais_atendimento/ouvidoria">
                                <div className="content">Ouvidoria</div>
                            </a>

                            <a className="br-item" href="https://www.gov.br/inpe/pt-br/canais_atendimento/imprensa">
                                <div className="content">Imprensa</div>
                            </a>

                            <a className="br-item" href="http://www.gov.br/inpe/pt-br/acesso-a-informacao/institucional/visita/">
                                <div className="content">Visitas ao INPE</div>
                            </a>

                        </div>

                    </div>

                    <div className="col-2">

                        <a className="br-item header" href="https://www.gov.br/inpe/pt-br/composicao">
                            <div className="content text-down-01 text-bold text-uppercase">Composição</div>
                            <div className="support"></div>
                        </a>

                    </div>

                    <div className="col-2">

                        <a className="br-item header" href="https://www.gov.br/inpe/pt-br/servicos">
                            <div className="content text-down-01 text-bold text-uppercase">Serviços</div>
                            <div className="support"></div>
                        </a>

                    </div>

                </div>

                <div className="d-none d-sm-block">

                    <div className="row align-items-end justify-content-between py-5">

                        <div className="col social-network">

                            <p className="text-up-01 text-extra-bold text-uppercase">Redes Sociais</p>

                            <a className="mr-3" href="https://www.twitter.com/inpe_mct">
                                <i className="fa-lg fa-brands fa-twitter"></i>
                            </a>

                            <a className="mr-3" href="https://www.youtube.com/inpemct">
                                <i className="fa-lg fa-brands fa-youtube"></i>
                            </a>

                            <a className="mr-3" href="https://www.facebook.com/inpe.oficial">
                                <i className="fa-lg fa-brands fa-facebook-f"></i>
                            </a>

                            <a className="mr-3" href="https://www.instagram.com/cptecinpe/">
                                <i className="fa-lg fa-brands fa-instagram"></i>
                            </a>

                        </div>

                        <div className="col assigns text-right">
                            <a href="http://www.acessoainformacao.gov.br/" alt="Acesso à informação" title="Acesso à informação">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 117 49" height="49" width="117" shapeRendering="geometricPrecision" textRendering="geometricPrecision">
                                    <defs>
                                    <style type="text/css">{`.a {font: normal bold 11px Open Sans, sans-serif;}`}</style>
                                    </defs>
                                    <circle cx="22" cy="23" r="22" fill="#fff"></circle>
                                    <path style={{ stroke: '#071d41', strokeWidth: 9, strokeLinecap: 'round' }} d="M22,23v13"></path>
                                    <path style={{ stroke: '#fff', strokeWidth: 4, strokeLinejoin: 'round' }} d="M4,43l3-6l4,3z"></path>
                                    <circle r="4.5" cy="11" cx="22" fill="#071d41"></circle>
                                    <g fill="#fff">
                                    <text x="47" y="22">
                                        <tspan className="a" y="18">Acesso à</tspan>
                                        <tspan className="a" x="47" y="31">Informação</tspan>
                                    </text>
                                    </g>
                                </svg>
                            </a>
                        </div>

                    </div>
                
                    <span className="br-divider my-3"></span>

                    <div className="container-lg">
                        <div className="info">
                            <div className="text-down-01 text-medium pb-3">Desenvolvido por: <a href="https://www.cptec.inpe.br/previsao-tempo/sp/cachoeira-paulista">CPTEC.</a></div>
                        </div>
                    </div>

                </div>
        
            </div>    

        </footer>   
        {/* FIM - FOOTER */}        
        </>
    );
}

export default Footer;
