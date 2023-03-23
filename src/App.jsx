import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import SignIn from '@pages/SignIn/SignIn';
import Test from '@components/Test/Test';
import FindPasswordPage from '@pages/FindPassword/FindPasswordPage';
import Profiles from '@pages/Profiles/Profiles';
import MainPageSlide from '@pages/MainPageSlide/MainPageSlide';
import DetailPages from './pages/DetailPages/DetailPages';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/hello" element={<SignIn />} />
          <Route path="/test" element={<Test />} />
          <Route path="/hello" element={<Test />} />
          <Route path="/profiles" element={<Profiles />} />
          <Route path="/main" exact element={<MainPageSlide />} />
          <Route path="/detailPage01/:id" element={<DetailPages />} />
          <Route path="/findpassword" element={<FindPasswordPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
