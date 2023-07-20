import './App.css';

import Header from './components/Header';
import Section from './components/Section';
import ListItem from './components/ListItem';

import { gamesListData } from './models/consts'


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Section
          title="Meus jogos"
          subtitle="Os games que eu mais curto jogar!"
        >
          {
            gamesListData.map((game) => (
              <ListItem
                url={game.url}
                Imageurl={game.Imageurl}
                alt={game.alt}
                />
            ))
          }


        </Section>
        <Section
          title="Canais e streamers"
          subtitle="Os canais que eu mais curto assistir!"
        />
      </main>
    </div>
  );
}

export default App;
