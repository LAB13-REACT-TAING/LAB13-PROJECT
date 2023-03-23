import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import MainNavPage from '@pages/MainNavPage/MainNavPage';
import DetailPage from '@pages/DetailPage/DetailPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/mainnavpage" element={<MainNavPage />} />
          <Route path="/detailpage" element={<DetailPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
