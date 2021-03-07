//import { ReactDOM } from 'react';
import { Carousel } from 'react-bootstrap'
//import Image from 'next/image' // kinda awkward to use..?
import styles from '../styles/TecsCarousel.module.css'


const itemList = [
  {
    imageName: "vestibulandas-inscricao.png",
    alt: "À esquerda, em caixa alta: 'Inscrições abertas'; à direita: curso de introdução à computação para meninas 2021.",
    linkToPage: "https://tecs.ime.usp.br/inscricao-meninas-2021"
  },
  {
    imageName: "2017-12-07 00.14.01.jpg",
    alt: "Em um auditório do IME-USP, a 1ª geração do Tecs e palestrantes da Semana de Computação Social. No total, são 17 pessoas (dispostas em 3 fileiras) em frente de uma apresentação de eslaides por cima de uma lousa.",
    linkToPage: false
  },
  {
    imageName: "IMG_4733.JPG",
    alt: "5 integrantes do Tecs (vestindo a camisa do grupo) em um auditório do IME-USP brincando com extensões elétricas, em um trocadilho com extensão universitária",
    linkToPage: false
  },
];

/* https://blog.hackages.io/conditionally-wrap-an-element-in-react-a8b9a47fab2 */
const ConditionalWrapper = ({ condition, wrapper, children }) => 
  condition ? wrapper(children) : children;

/*const TecsCarouselItem = ({ imageName, alt, linkToPage }) => (
  <Carousel.Item className={styles.tecscarousel}>
    <ConditionalWrapper
      condition={linkToPage}
      wrapper={children => <a href={linkToPage}>{children}</a>}
    >
      <img 
        className="w-100 d-block" 
        src={"/assets/img/Carousel/" + imageName}
        alt={alt}
      />
    </ConditionalWrapper>
  </Carousel.Item>
);*/

const TecsCarousel = () => (
  <Carousel prevLabel={null} nextLabel={null}>
    {/*The documentation says the labels should only show up for screen readers 
    but they're showing up for me regardless, so I'll disable them explicitly.*/}

    {itemList.map( (item, ind) => (
      //<TecsCarouselItem key={ind.toString()} imageName={item.imageName} alt={item.alt} linkToPage={item.linkToPage} />
      //doesnt work :/
      
      <Carousel.Item key={ind.toString()} className={styles.tecscarousel}>
        <ConditionalWrapper
          condition={item.linkToPage}
          wrapper={children => <a href={item.linkToPage}>{children}</a>}
        >
          <img 
            className="w-100 d-block" 
            src={"/assets/img/Carousel/" + item.imageName}
            alt={item.alt}
          />
        </ConditionalWrapper>
      </Carousel.Item>
    ))}

    {/*
    <Carousel.Item className={styles.tecscarousel}>
      <a href="./inscricao-meninas-2021">
        <img 
          className="w-100 d-block" 
          src={"/assets/img/Carousel/vestibulandas-inscricao.png"}
          alt="À esquerda, em caixa alta: 'Inscrições abertas'; à direita: curso de introdução à computação para meninas 2021."
        />
      </a>
    </Carousel.Item>
      
    <Carousel.Item className={styles.tecscarousel}>
      <img 
        className="w-100 d-block" 
        src="/assets/img/Carousel/2017-12-07 00.14.01.jpg"
        alt="Em um auditório do IME-USP, a 1ª geração do Tecs e palestrantes da Semana de Computação Social. 
        No total, são 17 pessoas (dispostas em 3 fileiras) em frente de uma apresentação de eslaides por cima de uma lousa." 
      />
    </Carousel.Item>
    
    <Carousel.Item className={styles.tecscarousel}>
      <img 
        className="w-100 d-block" 
        src="/assets/img/Carousel/IMG_4733.JPG"
        alt="5 integrantes do Tecs (vestindo a camisa do grupo) em um auditório do IME-USP brincando com extensões elétricas, em um trocadilho com extensão universitária" 
      />
    </Carousel.Item>

    <Carousel.Item className={styles.tecscarousel}>
      <img 
        className="w-100 d-block" 
        src="/assets/img/Carousel/encontecs-i-grupo.jpg"
        alt="Em 2 fileiras, integrantes do Tecs (vestindo a camiseta do grupo) e participantes do EnconTecs em um auditório do IME-USP. Ao total, 18 pessoas na frente de uma tela de projetor." 
      />
    </Carousel.Item>

    <Carousel.Item>
      <img 
        className="w-100 d-block" 
        src="/assets/img/Carousel/2DSC05427.jpg"
        alt="6 pessoas reunidas em volta de um integrante do Tecs (com a camiseta do grupo) apresentando o grupo em um evento de recepção de bixes em uma sala do IME-USP." 
      />
    </Carousel.Item>

      <Carousel.Item>
      <img 
        className="w-100 d-block" 
        src="/assets/img/Carousel/print1.png"
        alt="3ª geração do Tecs (2020) em uma reunião virtual. A imagem é uma captura de tela de uma vídeo-chamada com 12 pessoas cujos rostos estão dispostos em 3 linhas e 4 colunas." 
      />
    </Carousel.Item>

      <Carousel.Item>
      <img 
        className="w-100 d-block" 
        src="/assets/img/Carousel/2DSC05448.jpg"
        alt="Dois integrantes do Tecs (com a camiseta do grupo) apresentam o grupo para duas pessoas. Entre os dois grupos, há uma mesa e um 'banner' do Tecs." 
      />
    </Carousel.Item>
    */}
  </Carousel> 
);

export default TecsCarousel;
