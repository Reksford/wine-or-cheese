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
  const [story, setStory] = useState({body: "Wine or Cheese", options: ["Wine", "Cheese"]});
  const [options, setOptions] = useState([]);

  const storyClickHandler = (dialogSelection) => {
    if (Cookies.get('finished')) {
      setStory(data['finished']);
    } else {
      setStory(dialogSelection);
    }
  }

  const infoClickHandler = () => {
    setInfo((prevState) => {
      return !prevState;
    });
  }

  useEffect(() => {
    let nextOptions = story.options.map((el) => data[el]);
    if (nextOptions.length === 0) {
      //Ending states have no options. So set cookie.
      Cookies.set('finished', true, {expires: 1});
    }
    setOptions(nextOptions);
  }, [story]);

  return (
    <div className="App">
      {/* header */}
      <div className="Game">
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
