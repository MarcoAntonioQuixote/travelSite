import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage.js';
import CityInfoPage from './pages/CityInfoPage.js';
import NotFoundPage from './pages/NotFoundPage.js';

function MyRouter() {
  return (
    <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/cityinfo' element={<CityInfoPage />} />
        <Route path='*' element={<NotFoundPage />} />
    </Routes>
  )
}

export default MyRouter