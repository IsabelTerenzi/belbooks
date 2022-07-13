import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import Search from '../Pages/Search';
import About from '../Pages/About';
import Books from '../Pages/Books';
import NotFound from '../Pages/NotFound';

class Content extends React.Component {
  render () {
    return (
      <Routes>
        <Route index element={<Home/> }/>
        <Route path='search' element={<Search />} />
        <Route path='about' element={<About />} />
        <Route path='books' element={<Books/> } />
        <Route path='*' element={ <NotFound/> } />
      </Routes>
    )
  }
}

export default Content;
