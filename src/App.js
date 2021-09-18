import './App.css';
import React, {useState, useEffect} from 'react';
import Cookies from 'js-cookie';

import data from './assets/stories.json';

import Button from './components/button/button';
import Display from './components/display/display';
import InfoButton from './components/info/infoButton';
import InfoBox from './components/info/infoBox';
import Footer from './components/footer/footer';

function App() {
  const [info, setInfo] = useState(false);
  const [story, setStory] = useState({body: "Wine or Cheese?", options: ["Wine", "Cheese"], type:"title"});
  const [options, setOptions] = useState([]);
  const [endGame, setEndGame] = useState(false);

  const storyClickHandler = (dialogSelection) => {
    if (Cookies.get('finished')) {
      setStory(data['finished']);
    } else {
      setStory(dialogSelection);
    }
  }

  const gameClickHandler = () => {
    if (endGame) {
      if (story.type.match('ending')) {
        setStory((prevState) => {
          return {
            ...prevState,
            ...data['endGameA']
          }
        });
      } else if (story.next[0]) {
        setStory((prevState) => {
          return {
            ...prevState,
            ...data[story.next]
          }
        });
      }
    }
    if(info) {
      infoClickHandler();
    }
  }

  const infoClickHandler = () => {
    setInfo((prevState) => {
      return !prevState;
    });
  }

  //This Effect updates the buttons to be pressed and sets finished cookie
  useEffect(() => {
    let nextOptions = story.options.map((el) => data[el]);
    if (story.type.match('ending')) {
      Cookies.set('finished', true, {expires: 1});
    }
    setOptions(nextOptions);
  }, [story]);

  //This Effect updates endGame.status when reaching an ending story. Only needs to happen once.
  useEffect(() => {
    if (story.type.match('ending')) {
      setEndGame(true);
    }
  }, [story]);

  return (
    <div className="App">
      {/* header */}
      <div className="Game" onClick={gameClickHandler}>
        <Display type={story.type}>{story.body}</Display>
        <div className="Buttons">
          {options.map((el) => <Button
            key={el.title}
            option={el}
            clicked={storyClickHandler} >
            {el.title}
          </Button>) }
        </div>
      </div>
      <InfoButton clicked={infoClickHandler} />
      {info ? <InfoBox clicked={infoClickHandler} /> : null}
      <Footer />
    </div>
  );
}

export default App;
