import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Test from './components/Test/Test';


function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="App">
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/hello" element={<Test />}></Route>
      </Routes>
      <Footer />
     </BrowserRouter>
    </div>
  );
}

export default App;
