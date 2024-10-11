import useStore from "../store/dictionaryStore"; 
import DictionaryImage from '../assets/dictionary.png'

function DictionaryCard() {
    const setWord = useStore((state) => state.setWord); 

    const handleSearch = (e) => {
        e.preventDefault(); 
        const inputWord = document.getElementById('dictionaryWord').value.trim();
        setWord(inputWord); 
    };

    return (
        <div className="Dictionary-container">
            <h2 className="title">Dictionary Word by Lucy Wambui</h2>
            <img src={DictionaryImage} alt="" />
            <p className="text-area">Type a word to find its meaning</p>
            <form onSubmit={handleSearch}>
                <input type="text" id="dictionaryWord" placeholder="dictionary word" />
                <button type="submit">Search</button>
            </form>
        </div>
    );
}

export default DictionaryCard;
