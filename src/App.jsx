import DictionaryApp from './component/DictionaryCard'
import Words from './component/Words'
import { QueryClient, QueryClientProvider} from 'react-query'; 
import './App.css'

const queryClient = new QueryClient();
function App() {
 return (
    <QueryClientProvider client ={queryClient}>
      <DictionaryApp/>
      <Words/>
    </QueryClientProvider>
  )
}

export default App
