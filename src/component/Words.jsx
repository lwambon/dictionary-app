import { useQuery } from 'react-query';
import useStore from '../store/dictionaryStore';

function Words() {
    const word = useStore((state) => state.word);

    const { data, error, isLoading } = useQuery(["allWords", word], async function () {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        if (!response.ok) {
            throw new Error('Word not found!!');
        }
        const result = await response.json();
        return result;
    }, {
        enabled: !!word 
    });

    if (isLoading) return <p className="loading-card">Loading...</p>;
    if (error) return <p className="error-card">{error.message}</p>;

    return (
        <div className="data-container">
            {data && data[0] && (
                <div>
                    <h2>{data[0].word}</h2>
                    <p>{data[0].meanings[0].definitions[0].definition}</p>
                </div>
            )}
        </div>
    );
}

export default Words;
