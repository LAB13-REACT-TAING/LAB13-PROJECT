import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from '@components/Footer/Footer';
import SearchForm from './pages/SearchForm/SearchForm';
import ErrorPage from './pages/ErrorPage/ErrorPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/search" element={<SearchForm />} />
          {/* <Route path="/errorPage " element={<ErrorPage />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
