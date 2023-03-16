import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import MainPageSlide from '@pages/MainPageSlide/MainPageSlide';
import QuickVodSlide from './pages/QuickVodSlide/QuickVodSlide';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/main" element={<MainPageSlide />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
