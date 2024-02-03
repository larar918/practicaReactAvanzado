import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import AdvertsPage from './pages/adverts/AdvertsPage/AdvertsPage';
import AdvertPage from './pages/adverts/AdvertPage/AdvertPage';
import NewAdvertPage from './pages/adverts/NewAdvertPage/NewAdvertPage';
import LoginPage from './pages/auth/LoginPage';
import NotFoundPage from './pages/notFound/NotFound';


function App() {
  const isLogged = useSelector(state => state.auth);

  return (
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/adverts/*" element={isLogged ? <AdvertsPage /> : <Navigate to="/login" />}/>
          <Route path="/adverts/:id" element={isLogged ? <AdvertPage /> : <Navigate to="/login" />}/>
          <Route path="/adverts/new" element={isLogged ? <NewAdvertPage /> : <Navigate to="/login" />}/>
          <Route path="/404" element={isLogged ? <NotFoundPage /> : <Navigate to="/login" />} />
          <Route path="*" element={isLogged ? <NotFoundPage /> : <Navigate to="/login" />} />
        </Routes>
  );
}

export default App;
