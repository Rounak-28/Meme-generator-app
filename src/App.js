import './App.css';
import Header from './components/Header';
import Meme from './components/Meme';

export default function App() {
  return(
    <div className="h-[100vh] w-[100vw] flex justify-center bg-fuchsia-100">
        <div className='bg-fuchsia-100 h-[100vh] max-w-[345px]'>
          <Header/>
          <Meme/>
        </div>
    </div>
    
  )
};
