import { useState, useEffect } from "react";
import { Navigate, Routes, Route } from 'react-router-dom';

import Search from './components/Search';
import Nav from './components/Nav';
import Photos from './components/Photos';


const App = () => {
  const [searchTerm, setSearchTerm] = useState('motorcycles');

  useEffect(() => {
    handleSearch();
  }, []);

  const handleSearch = async (searchTerm) => {
    try {
      await searchTerm
      setSearchTerm(searchTerm);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container">
      <Search setSearchTerm={handleSearch}/>
      <Nav />
      <Routes>
      <Route index element={<Navigate to={`/search/${searchTerm}`} replace={true} />} />
        <Route path="/search/:searchTerm" element={<Photos />} />
      </Routes>
    </div>
  );
}

export default App;
