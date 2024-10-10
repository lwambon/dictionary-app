function DictionaryCard() {
  return (
    <div className="Dictionary-conatiner">
        <h2 className="title">Created by lucy wambui</h2>
        <p className="text-area">type a word to find its meaning</p>
        <form action="">
            <input type="text" id="dictionary word"  placeholder="dictionary word"/>
            <button type="search"> search</button>
        </form>
    </div>
  )
}

export default DictionaryCard