let Box = ({children}) => {
    const [isOpen, setIsOpen] = useState(true);
    return (
        <div className="box">
            <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
                {isOpen ? '–' : '+'}
            </button>
            {/* <AnimeList animes={animes} onSelectedAnimes={onSelectedAnimes}/> */}
            {isOpen && ( children )}
        </div>
    )
}

export default Box;