import logo from './logo.svg';
import './App.css';

import FirstComponent from './components/FirstComponent';
import AnotherComponent from './components/AnotherComponent';
import Images from './components/Images';
import Hooks from './components/Hooks';
import List from './components/List';
import RenderConst from './components/RenderConst';

function App() {
  return (
    <div className="App">
      <h2>Hello word</h2>
      <FirstComponent />
      <AnotherComponent />
      <Images />
      <Hooks />
      <List />
      <RenderConst x={7} y={10} />
    </div>
  );
}

export default App;
