import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '@pages/Header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </div>
  );
}

export default App;
