import './App.css';
import React, {useState, useEffect} from 'react';
import Cookies from 'js-cookie';

import data from './assets/stories.json';

import Button from './components/button/button';
import Display from './components/display/display';
import InfoButton from './components/info/infoButton';
import InfoBox from './components/info/infoBox';

function App() {
  const [info, setInfo] = useState(false);
  const [story, setStory] = useState({body: "Wine or Cheese", options: ["Wine", "Cheese"], type:"init"});
  const [options, setOptions] = useState([]);
  const [endGame, setEndGame] = useState({status: false, stage: 0});

  const storyClickHandler = (dialogSelection) => {
    if (Cookies.get('finished')) {
      setStory(data['finished']);
    } else {
      setStory(dialogSelection);
    }
  }

  const gameClickHandler = () => {
    if (endGame.status) {
      if (endGame.stage < 1) {
        setStory(data['endGameA']);
        setEndGame((prevState) => {
          return {  ...prevState,
                    stage: prevState.stage++
                  }
        });
      } else {
        setStory(data['endGameB']);
      }
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
    if (nextOptions.length === 0 && story.type.match('ending')) {
      //Ending states have no options. So set cookie.
      Cookies.set('finished', true, {expires: 1});
    }
    setOptions(nextOptions);
  }, [story]);

  //This Effect updates endGame.status when reaching an ending story. Only needs to happen once.
  useEffect(() => {
    if (story.type.match('ending')) {
      setEndGame((prevState) => {
        return {
          ...prevState,
          status: true
        }
      });
    }
  }, [story]);

  return (
    <div className="App">
      {/* header */}
      <div className="Game" onClick={gameClickHandler}>
        <Display>{story.body}</Display>
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
      {/* footer */}
    </div>
  );
}

export default App;
