import Anime from './Anime';

let AnimeList = ({animes, onSelectedAnimes}) => {
    return (
        <ul>
            {animes?.map((anime) => (
                <Anime key={anime.mal_id} anime={anime} onSelectedAnimes={onSelectedAnimes}/>
            ))}
        </ul>
    )
}

export default AnimeList;