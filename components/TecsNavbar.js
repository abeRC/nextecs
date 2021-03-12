//import { forwardRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap'
import Link from 'next/link'
//import Image from 'next/image' // kinda awkward to use..?

import styles from '../styles/TecsNavbar.module.css'
import { faFacebook, faInstagram, faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

// https://react-bootstrap.github.io/components/navbar/

/* hmmm: Fixed navbars use position: fixed, meaning they’re pulled from the normal flow of the DOM and may require custom CSS (e.g., padding-top on the <body>) 
to prevent overlap with other elements. Also note that .sticky-top uses position: sticky, 
which isn’t fully supported in every browser. */

/*ORIGINAL:
<div id="navbar-total" class="secondary-blue-bg position-fixed w-100" style="z-index: 10;">
      <nav class="navbar navbar-light navbar-expand-md nav-coll pt-3 text-uppercase secondary-font">
        <div class="container-fluid">
          <button data-toggle="collapse" class="navbar-toggler menu-colapsado" data-target="#navcol-1"
            style="padding-right: 8px;padding-left: 8px;">
            <span class="navbar-toggler-icon"
              style="filter: blur(0px) brightness(123%) contrast(200%) grayscale(0%) hue-rotate(270deg) invert(100%) saturate(114%) sepia(100%);opacity: 1;"></span>
          </button>
          <a class="navbar-brand " href="./">
            <img src="./assets/img/Logos/grafo%20logo%20br%20branco.png" style="width: 49px;"
              alt="Logo branco do Tecs (o mapa do Brasil desenhado como um grafo).">
            <img id="logo-principal" src="./assets/img/Logos/tecs4.png"
              alt="Tecs (escrito em caixa alta, na cor branca)">
          </a>
          <div class="collapse navbar-collapse row" id="navcol-1">
            <ul class="nav navbar-nav ml-auto d-md-none d-lg-flex" style="min-width: max-content;">
              <li class="nav-item" role="presentation"><a class="nav-link d-inline-block"
                href="./inscricao-meninas-2021/">Curso para Meninas</a></li>
              <li class="nav-item" role="presentation"><a class="nav-link d-inline-block" href="./Quem somos">Quem
                  somos</a></li>
              <li class="nav-item" role="presentation"><a class="nav-link d-inline-block" href="./Projetos">Projetos</a>
              </li>
              <li class="nav-item" role="presentation"><a class="nav-link d-inline-block" href="./Contato">Contato</a>
              </li>
              <li class="nav-item" role="presentation"><a class="nav-link d-inline-block"
                  href="./Participe">Participe</a></li>
            </ul>
          </div>

          <span class="media-icons-1 row">
            <!--MEDIA ICONS-->
            <a class="collapse navbar-collapse" href="https://twitter.com/tecsusp/" target="_blank" rel="noopener">
              <i class="fa fa-twitter"></i>
            </a>
            <a href="mailto:tecs@ime.usp.br">
              <i class="fa fa-envelope"></i>
            </a>
            <a href="https://t.me/tecsusp" target="_blank" rel="noopener">
              <i class="fa fa-telegram"></i>
            </a>
            <a href="https://pt-br.facebook.com/tecs.usp/" target="_blank" rel="noopener">
              <i class="fa fa-facebook"></i>
            </a>
            <a class="collapse navbar-collapse" href="https://www.instagram.com/tecs.usp/?hl=pt-br" target="_blank"
              rel="noopener">
              <i class="fa fa-instagram"></i>
            </a>
          </span>
        </div>
        <!--container-fluid-->
      </nav>
    </div> */
const handleNavKeyPress = (e) => e.key == " " ? e.target.click() : null;
const TecsNavbar = () => (
  <Navbar expand="md" className={styles.tecsnavbar}> {/*className="nav-coll pt-3 text-uppercase secondary-font" */}
    {/*Collapse button for <md breakpoints.*/}
    <Navbar.Toggle aria-controls="basic-navbar-nav" className={styles['tecsnavbar-button']}/>
    
    {/*Tecs logo*/}
    {/*With the passHref prop, the Navbar.Brand becomes an anchor. Without it, a span (which we don't want)*/}
    <Link href="/" passHref> 
      <Navbar.Brand className={styles['navbar-brand']} role="button" role="button" onKeyDown={handleNavKeyPress}>
        {/*Use a css loader maybe? https://stackoverflow.com/questions/35827356/node-react-hyphenated-css-class-names/40121773 */}
          <img
            className={styles['tecsnavbar-logo-grafo']}
            src={"https://tecs.ime.usp.br/assets/img/Logos/tecs-grafo-branco.png"}
            alt="Logo branco do Tecs (o mapa do Brasil desenhado como um grafo)." 
          />
          <img 
            className={styles['tecsnavbar-logo-texto']}
            src={"https://tecs.ime.usp.br/assets/img/Logos/tecs-texto-branco.png"}
            alt="Tecs (escrito em caixa alta, na cor branca)" 
          />
      </Navbar.Brand>
    </Link>

    {/*Main navigation */}
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        {/*https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/button_role#accessibility_concerns */}
        <Link href="/lorem_ipsum"><a className="nav-link" role="button" onKeyDown={handleNavKeyPress}>Quem somos</a></Link>
        <Link href="/lorem_ipsum2"><a className="nav-link" role="button" onKeyDown={handleNavKeyPress}>Projetos</a></Link> {/*Transformar em NavDropdown..? */}
        <Link href="/lorem_ipsum3/lol"><a className="nav-link" role="button" onKeyDown={handleNavKeyPress}>Contato</a></Link>
        <Link href="/"><a className="nav-link" role="button" onKeyDown={handleNavKeyPress}>Participe</a></Link>
      </Nav>
    </Navbar.Collapse>

    {/*Media icons*/}
    <Navbar.Brand className={styles['tecsnavbar-media-icons']+ " row"}>
      {/*get rid of anchors..? */}
      <a href="https://twitter.com/tecsusp/">
        <FontAwesomeIcon icon={faTwitter} className="collapse navbar-collapse" />
      </a>
      <a href="mailto:tecs@ime.usp.br">
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
      <a href="https://t.me/tecsusp">
        <FontAwesomeIcon icon={faTelegram} />
      </a>
      <a href="https://pt-br.facebook.com/tecs.usp/">
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a href="https://www.instagram.com/tecs.usp/?hl=pt-br">
        <FontAwesomeIcon icon={faInstagram} className="collapse navbar-collapse" />
      </a>
    </Navbar.Brand>
  </Navbar>
);

export default TecsNavbar;