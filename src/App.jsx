import { useState } from 'react';
import './App.css';

/** Import Components */
import NavBar from './Components/NavBar';
import Search from './Components/Search';
import NumResult from './Components/NumResult';
import Main from './Components/Main';
import Box from './Components/Box';
import AnimeList from './Components/AnimeList';
import AnimeDetail from './Components/AnimeDetail';

/** Import Data */
import animesData from './Json/AnimesData.json'

export default function App() {
  const [animes, setAnimes] = useState(animesData);
  const [selectedAnime, setSelectedAnime] = useState(animes[0]);

  function handleSelectedAnime(id) {
    const newAnime = animes.filter((anime) => anime.mal_id === id);
    setSelectedAnime(newAnime[0]);
  }
 
  return (
    <>
      <NavBar>
        <Search>
          <NumResult animes={animes} />
        </Search>
      </NavBar>
      <Main>
        <Box>
          <AnimeList animes={animes} onSelectedAnimes={handleSelectedAnime} />
        </Box>
        <Box>
          <AnimeDetail selectedAnime={selectedAnime} />
        </Box>
      </Main>
    </>
  );
}

// function NavBar({ children }){

//   return (
//     <nav className="nav-bar">
//       <Logo />
//       { children }
//     </nav>
//   )
// }

// function Logo(){
//   return(
//     <div className="logo">
//       <span role="img">👕</span>
//       <h1>Deisgner</h1>
//       <span role="img">👚</span>
//     </div>
//   )
// }

// function Search({ children }){
//   const [query, setQuery] = useState('');

//   return (
//     <div className="search-container">
//       <input className="search" type="text" placeholder="Search designer..." value={query} onChange={(e) => setQuery(e.target.value)} />
//       {/* <NumResult animes={animes}/> */}
//       { children }
//     </div>
//   )
// }

// function NumResult({animes}){
//   return(
//     <p className="search-results">
//       Found <strong>{animes.length}</strong> results
//     </p>
//   )
// }

// function Main({children}){
//   return(
//     <main className="main">
//         { children }
//     </main>
//   )
// }

// function Box({ children }){
//   const [isOpen, setIsOpen] = useState(true);

//   return (
//     <div className="box">
//       <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
//         {isOpen ? '–' : '+'}
//       </button>
//       {/* <AnimeList animes={animes} onSelectedAnimes={onSelectedAnimes}/> */}
//       {isOpen && ( children )}
//     </div>
//   )
// }

// function AnimeList({animes, onSelectedAnimes}){
//   return (
//     <ul className="list list-anime">
//       {animes?.map((anime) => (
//         <Anime key={anime.mal_id} anime={anime} onSelectedAnimes={onSelectedAnimes}/>
//       ))}
//     </ul>
//   )
// }

// function Anime({anime, onSelectedAnimes}) {
//   return (
//     <li onClick={() => onSelectedAnimes(anime.mal_id)}>
//       <img src={anime.image} alt={`${anime.title} cover`} />
//       <h3>{anime.title}</h3>
//       <div>
//         <p>
//           <span>{anime.year}</span>
//         </p>
//       </div>
//     </li>
//   )
// }

// function AnimeDetail({selectedAnime}){
//   return (
//     <div className="details">
//       <header>
//         <img src={selectedAnime.image} alt={`${selectedAnime.title} cover`} />
//         <div className="details-overview">
//           <h2>{selectedAnime.title}</h2>
//           <p>
//             {selectedAnime.year} &bull; {selectedAnime.score}
//           </p>
//         </div>
//       </header>
//       <section>
//         <p>
//           <em>{selectedAnime.synopsis}</em>
//         </p>
//       </section>
//     </div>
//   )
// }