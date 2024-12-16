import './App.css'
import Brawl from "./Brawl";
import Nivel from './Nivel';
import ExibCima from "./Trofeu"

export default function App() {
  return (
    <div className="app">

      <div className="layout">
          <ExibCima classe={34} trofeu='672' />
          <div className="imagem" style={{ backgroundColor: 'rgb(255, 0, 0)' }}>
            <img className="brawler" src="./src/assets/tara.webp" alt="TARA"></img>
            <Brawl acessorio ={true} eng1 = {true} powerStar = {true} eng2 = {true} nome = "TARA"></Brawl>  
          </div>
          <Nivel nivel ={11} maximo = "PODER MÁXIMO" />
      </div>

      <div className="layout">
          <ExibCima classe={33} trofeu='654' />
          <div className="imagem" style={{ backgroundColor: 'rgb(0, 204, 24)' }}>
            <img className="brawler" src="./src/assets/nita.png" alt="Descrição da Imagem"></img>
            <Brawl acessorio ={true} eng1 = {true} powerStar = {true} eng2 = {true} nome = "NITA"></Brawl>  
          </div>
          <Nivel nivel ={10} maximo = "1440🔮 2800💰" />
      </div>

      <div className="layout">
          <ExibCima classe={32} trofeu='629' />
          <div className="imagem" style={{ backgroundColor: 'rgb(138, 0, 197)' }}>
            <img className="brawler" src="./src/assets/lou.png" alt="Descrição da Imagem"></img>
            <Brawl acessorio ={true} eng1 = {true} powerStar = {true} eng2 = {false} nome = "LOU"></Brawl>  
          </div>
          <Nivel nivel ={9} maximo = "890🔮 1875💰" />
      </div>

      <div className="layout">
          <ExibCima classe={30} trofeu='588' />
          <div className="imagem" style={{ backgroundColor: 'rgb(255, 255, 29)' }}>
            <img className="brawler" src="./src/assets/kit.png" alt="Descrição da Imagem"></img>
            <Brawl acessorio ={true} eng1 = {true} powerStar = {false} eng2 = {false} nome = "KIT"></Brawl>  
          </div>
          <Nivel nivel ={8} maximo = "550🔮 1250💰" />
      </div>

      <div className="layout">
          <ExibCima classe={29} trofeu='549' />
          <div className="imagem" style={{ backgroundColor: 'rgb(0, 204, 24)' }}>
            <img className="brawler" src="./src/assets/colt.webp" alt="Descrição da Imagem"></img>
            <Brawl acessorio ={true} eng1 = {false} powerStar = {false} eng2 = {false} nome = "COLT"></Brawl>  
          </div>
          <Nivel nivel ={7} maximo = "340🔮 800💰" />
      </div>

      <div className="layout">
          <ExibCima classe={26} trofeu='505' />
          <div className="imagem" style={{ backgroundColor: 'rgb(0, 136, 209)' }}>
            <img className="brawler" src="./src/assets/gus.png" alt="Descrição da Imagem"></img>
            <Brawl acessorio ={false} eng1 = {false} powerStar = {false} eng2 = {false} nome = "GUS"></Brawl>  
          </div>
          <Nivel nivel ={6} maximo = "210🔮 480💰" />
      </div>

      <div className="layout">
          <ExibCima classe={20} trofeu='380' />
          <div className="imagem" style={{ backgroundColor: 'rgb(255, 0, 0)' }}>
            <img className="brawler" src="./src/assets/lily.png" alt="Descrição da Imagem"></img>
            <Brawl acessorio ={false} eng1 = {true} powerStar = {false} eng2 = {true} nome = "LILY"></Brawl>  
          </div>
          <Nivel nivel ={11} maximo = "PODER MÁXIMO" />
      </div>

      <div className="layout">
          <ExibCima classe={17} trofeu='321' />
          <div className="imagem" style={{ backgroundColor: 'rgb(138, 0, 197)' }}>
            <img className="brawler" src="./src/assets/lola.png" alt="Descrição da Imagem"></img>
            <Brawl acessorio ={true} eng1 = {false} powerStar = {true} eng2 = {true} nome = "LOLA"></Brawl>  
          </div>
          <Nivel nivel ={11} maximo = "PODER MÁXIMO" />
      </div> 

      <div className="layout">
          <ExibCima classe={6} trofeu='102' />
          <div className="imagem" style={{ backgroundColor: 'rgb(255, 255, 29)' }}>
            <img className="brawler" src="./src/assets/meg.webp" alt="Descrição da Imagem"></img>
            <Brawl acessorio ={true} eng1 = {true} powerStar = {true} eng2 = {true} nome = "MEG"></Brawl>  
          </div>
          <Nivel nivel ={11} maximo = "PODER MÁXIMO" />
      </div>

    </div>
  );
}