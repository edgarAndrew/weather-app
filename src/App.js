import './App.css';
import {Weather} from './MyComponents/weather'
import {Header} from './MyComponents/Header'
import {Footer} from './MyComponents/Footer'

function App() {
  return (
    <div className='App'>
        <Header/>
        <Weather/>
        <Footer/>
    </div>
  )
}

export default App;
