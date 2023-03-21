import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import Test from '@components/Test/Test';
import Profiles from '@pages/Profiles/Profiles';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/hello" element={<Test />} />
          <Route path="/profiles" element={<Profiles />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
