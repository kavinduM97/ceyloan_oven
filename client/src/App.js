
import './App.css';
import AddItems from './components/pages/AddItems';
import {Routes,Route} from 'react-router-dom'
import DisplayItems from './components/pages/DisplayItems';

function App() {
  return (
    <div className="App">
    <Routes>
    <Route path ="/" element = {<AddItems/>}/>
    <Route path ="/table" element ={<DisplayItems/>}/>
    </Routes>
  
    </div>
  );
}

export default App;
