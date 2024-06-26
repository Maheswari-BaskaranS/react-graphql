import logo from './logo.svg';
import './App.css';
import CharactersList from './pages/CharactersList';
import{Route, Routes, Switch}from "react-router"
import Character from './pages/Character';
import Search from './pages/Search';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route strict exact path="/" element={<CharactersList/>}/>
        <Route strict exact path='/search' element={<Search/>}/>
        <Route strict exact path="/:id"  element={<Character/>}/>
      </Routes>
    </div>
  );
}

export default App;
