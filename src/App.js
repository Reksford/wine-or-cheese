import './App.css';
import React, {useState, useEffect} from 'react';
import data from './assets/stories.json';


import Button from './components/button/button';
import Display from './components/display/display';

function App() {
  const [ending, setEnding] = useState(false);
  const [story, setStory] = useState({body: null, options: []})
  const [options, setOptions] = useState([{title:"Wine", options: null}, {title:"Cheese", options: null}]);

  const endClickHandler = () => {
    setStory({body: "Well... Thanks for Playing!"});
    setEnding(false);
    //options should be an empty array so no buttons thus soft locking on the end screen.
  }

  const storyClickHandler = (dialogSelection) => {
    let newStory = ["storyA", "storyB"];
      if (!dialogSelection.options) {
        //pick story a || b and setStory
        newStory = newStory[new Date().getTime()%2]
        setStory(data[newStory]);
        let nextOptions = data[newStory].options.map((el) => data[el]);
        setOptions(nextOptions);
      } else {
        setStory(dialogSelection);
        let nextOptions = dialogSelection.options
        if (options.length === 0) {
          setEnding(true);
        } else {
          setOptions(nextOptions);
        }
      }
  }

  return (
    <div className="App">
      <div className="Game">
        <Display>{story.body}</Display>
        {/* ending ? <Button clicked={endClickHandler()}>The End</Button> : */
        options.map((el) => <Button key={el.title} option={el} clicked={storyClickHandler}>{el.title}</Button>) }
      </div>
      {/* footer */}
    </div>
  );
}

export default App;
