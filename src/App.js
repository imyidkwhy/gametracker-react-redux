import GameForm from './components/GameForm/GameForm';
import GameList from './components/GameList/GameList'
import './App.css';

function App() {
  return (
    <div className="app">
     <header className='app-header'>
      <h1>
        Game Tracker Site
      </h1>
     </header>
     <main className='app-main'>
      <div className='app-left-column'>
        <GameForm/>
      </div>
      <div className='app-right-column'>   <GameList/></div>
      </main>
    </div>
  );
}

export default App;
