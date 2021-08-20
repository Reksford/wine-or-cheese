import './App.css';

import Button from './components/button/button';
import Display from './components/display/display';

function App() {
  let options = ["Wine", "Cheese"];
  return (
    <div className="App">
      <div className="Game">
        <Display></Display>
        {options.map((el) => <Button>{el}</Button>)}

      </div>

    </div>
  );
}

export default App;
