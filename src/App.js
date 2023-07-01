import logo from './logo.svg';
import './App.css';
import Playlist from './pages/Playlist';
import SelectDLCs from './pages/SelectDLCs';




const App = () => {


  return (
    <div className="App">
      <SelectDLCs/>
      {/* <Playlist/> */}
    </div>
  );
}

export default App;