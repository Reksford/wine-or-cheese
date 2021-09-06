import './App.css';
import React, {useState, useEffect} from 'react';
import data from './assets/stories.json';


import Button from './components/button/button';
import Display from './components/display/display';

function App() {
  const [wineOrCheese, setWineOrCheese] = useState('')
  const [story, setStory] = useState({body: "Wine or Cheese", options: ["Wine", "Cheese"]});
  const [options, setOptions] = useState([]);
    // EndStory ({body: "You're Dead."});
    //options should be an empty array so no buttons thus soft locking on the end screen.
    //maybe load in footer on ending "That's all, well.... Thanks for Playing!"

  const storyClickHandler = (dialogSelection) => {
    setStory(dialogSelection);
    let nextOptions = dialogSelection.options.map((el) => data[el]);
    if (nextOptions.length === 0) {
      console.log("handle ending")
    }
    setOptions(nextOptions);
  }

  useEffect(() => {
    let nextOptions = story.options.map((el) => data[el]);
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
      {/* footer */}
    </div>
  );
}

export default App;
