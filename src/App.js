import { Navigate, Routes, Route } from 'react-router-dom';

import Search from './components/Search';
import Nav from './components/Nav';
import Photos from './components/Photos';

const App = () => {
  return (
    <div className="container">
      <Search />
      <Nav />
      <Routes>
        <Route index element={<Navigate to="/search/motorcycles" replace={true} />} />
        <Route path="/search/:searchTerm" element={<Photos />} />
      </Routes>
    </div>
  );
}

export default App;
