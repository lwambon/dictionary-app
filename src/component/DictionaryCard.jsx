import { useState } from 'react';
import Words from './Words';


function DictionaryCard() {
    const [word, setWord] = useState("");

    const handleSearch = (e) => {
        e.preventDefault(); 
        const inputWord = document.getElementById('dictionaryWord').value.trim();
        setWord(inputWord); 
    };

    return (
      <div className="Dictionary-container-card">
          <div className="Dictionary-container ">
          <h2 className="title">Created by Lucy Wambui</h2>
          <p className="text-area">Type a word to find its meaning</p>
          <form onSubmit={handleSearch}>
              <input type="text" id="dictionaryWord" placeholder="dictionary word" />
              <button type="submit">Search</button>
          </form>
          </div>
          <Words word={word} />
      </div>
    )
}

export default DictionaryCard;
