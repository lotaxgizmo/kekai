import './App.css';
import './trans.css';
import Home from './pages/Home'
import About from './pages/About'
import Checklist from './pages/Checklist'
import RandomPic from './pages/RandomPic'
import Kekainomics from './pages/Kekainomics'
import Roadmap from './pages/Roadmap'

function App() {
  return (
    <div className="App">
<Home/>
<About/>
<Checklist/>
<RandomPic/>
<Kekainomics/>

<Roadmap/> 
    </div>
  );
}

export default App;
