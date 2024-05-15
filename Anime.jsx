let Anime = ({anime, onSelectedAnimes}) => {
    return (
        <li onClick={() => onSelectedAnimes(anime.mal_id)}>
            <img src={anime.image} alt={`${anime.title} cover`} />
            <h3>{anime.title}</h3>
            <div>
                <p>
                <span>{anime.year}</span>
                </p>
            </div>
        </li>
    )
}

export default Anime;