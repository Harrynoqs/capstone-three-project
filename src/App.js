import { Route, Routes } from 'react-router-dom';
import './App.css';
import Crytpos from './Components/crytpopages';
import Cryptocurrency from './Components/cryptopage';
import NavBar from './Components/navbar';
import DetailsHeader from './Components/Header';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={(
          <div>
            <NavBar />
            <Crytpos />
          </div>
        )}
      />
      <Route
        path="/crypto-details"
        element={(
          <div>
            <DetailsHeader />
            <Cryptocurrency />
          </div>
        )}
      />
    </Routes>
  );
}

export default App;
