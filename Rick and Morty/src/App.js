import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import "./App.css";
import Character from "./pages/Character";
import CharacterList from "./pages/CharacterList";
import Search from "./pages/Search";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route strict exact path="/" element={<CharacterList />}></Route>
          <Route strict exact path="/search" element={<Search />}></Route>
          <Route strict exact path="/:id" element={<Character />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
