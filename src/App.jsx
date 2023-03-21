import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Header from '@pages/Header/Header';
import Logout from '@components/Header/Logout';

function App() {
  const [showLogout, setShowLogout] = useState(false);

  const onClickModalHandler = () => {
    setShowLogout(true);
  };

  const handleLogoutConfirm = () => {
    console.log('User confirmed logout');
    // 로그아웃 로직 작성 필요
  };

  const handleLogoutCancel = () => {
    console.log('User cancelled logout');
    setShowLogout(false);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Header onClickModalHandler={onClickModalHandler} />
        {showLogout && (
          <Logout
            onConfirm={handleLogoutConfirm}
            onCancel={handleLogoutCancel}
          />
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
