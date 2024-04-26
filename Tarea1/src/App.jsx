import { useEffect, useState } from 'react'
import data from './data.js'
import './index.css'

//Guardamos en arrays (por cada categoria) los id de los elementos.
const arrayCat1 = [1, 2, 3];
const arrayCat2 = [4, 5, 6];
const arrayCat3 = [7, 8, 9];
var arrayElementos = arrayCat1.concat(arrayCat2, arrayCat3);

const Boton = ({dataId, valor}) => { 
  return (
    <button 
      type="button" 
      className="filter-btn" 
      data-id={dataId}>
      {valor}
    </button>
  )

}

function gestionarCategorias(event) {
  switch (event.target.getAttribute('data-id')) {
    case "todo":
      arrayElementos = arrayCat1.concat(arrayCat2, arrayCat3);
      break;
    case "cat1":
      arrayElementos = arrayCat1;
      break;
    case "cat2":
      arrayElementos = arrayCat2;
      break;
    case "cat3":
      arrayElementos = arrayCat3;
      break;
  }
}

const Articulo = ({numero, clase}) => {
  return (
    <article className={clase} >
      <img 
        src={data[numero].src} 
        alt={data[numero].img} 
        className="person-img" >
      </img>
      <h4>yosemite</h4>
      <p className="title">{data[numero].categoria}</p>
    </article>
  )
}

function App() {

  const [count, setCount] = useState(0)
  setTimeout(() => { setCount((count) => count == 8 ? count = 0 : count + 1) }, 2000)

  return (
    <>
      <div className="title">
        <h2>slider DWEC</h2>
        <div className="underline"></div>
      </div>
      <section className="section">
        <div className="btn-container">

          <Boton dataId={"todo"} valor={"todas las categorias"} onClick={gestionarCategorias} />
          <Boton dataId={"cat1"} valor={"naturaleza"} onClick={gestionarCategorias} />
          <Boton dataId={"cat2"} valor={"mar"} onClick={gestionarCategorias} />
          <Boton dataId={"cat3"} valor={"parapente"} onClick={gestionarCategorias} />

        </div>
        <div className="section-center">

          {arrayElementos.map((elemento) => ( 
            <Articulo 
              numero={elemento} 
              clase={count === 0 ? "count === 0 ? 'activeSlide' : count === 8 ? 'nextSlide' : 'lastSlide'" : `count === ${elemento} ? 'activeSlide' : count === ${elemento - 1} ? 'nextSlide' : 'lastSlide'` } 
            />
          ))}

          {/* 
          <Articulo numero={1} clase={count === 1 ? 'activeSlide' : count === 0 ? 'nextSlide' : 'lastSlide'} />
          <Articulo numero={2} clase={count === 2 ? 'activeSlide' : count === 1 ? 'nextSlide' : 'lastSlide'} />
          <Articulo numero={3} clase={count === 3 ? 'activeSlide' : count === 2 ? 'nextSlide' : 'lastSlide'} />
          <Articulo numero={4} clase={count === 4 ? 'activeSlide' : count === 3 ? 'nextSlide' : 'lastSlide'} />
          <Articulo numero={5} clase={count === 5 ? 'activeSlide' : count === 4 ? 'nextSlide' : 'lastSlide'} />
          <Articulo numero={6} clase={count === 6 ? 'activeSlide' : count === 5 ? 'nextSlide' : 'lastSlide'} />
          <Articulo numero={7} clase={count === 7 ? 'activeSlide' : count === 6 ? 'nextSlide' : 'lastSlide'} />
          <Articulo numero={8} clase={count === 8 ? 'activeSlide' : count === 7 ? 'nextSlide' : 'lastSlide'} /> */}

        </div>
      </section>
    </>
  );
}

export default App
