import './App.css';

import Header from './components/Header';
import Section from './components/Section';
import ListItem from './components/ListItem';

import { channelsListData, gamesListData, socialListData } from './models/consts'


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Section
          title="Meus jogos"
          subtitle="Os games que eu mais curto jogar!"
          className="games-list"
        >
          {
            gamesListData.map((game) => (
              <ListItem
                url={game.url}
                imageurl={game.imageurl}
                alt={game.alt}
                />
            ))
          }
        </Section>
        <Section
          title="Canais e streamers"
          subtitle="Os canais que eu mais curto assistir!"
          className="channel-list"
        >
          {
            channelsListData.map((channel) => (
              <ListItem
                url={channel.url}
                imageurl={channel.imageurl}
                alt={channel.alt}
                />
            ))
          }
        </Section>

        <Section
          title="Minhas redes"
          subtitle="Me siga nas redes abaixo!"
          className="social-list"
          >
            {
              socialListData.map((social) => (
                <ListItem
                  url={social.url}
                  imageurl={social.imageurl}
                  alt={social.alt}
                  />
              ))
            }  
        </Section>
      </main>
    </div>
  );
}

export default App;
