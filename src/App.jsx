import './App.css'
import AnalogueClock from './components/AnalogueClock';
import DigitalClock from './components/DigitalClock';

function App() {
  return (
    <div className="App">
      <AnalogueClock />
      <DigitalClock />
    </div>
  );
}

export default App;