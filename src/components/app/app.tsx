import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Posts } from '../posts';
import { Post } from '../posts/post';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Posts />} />
        <Route path='/post/:id' element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
};
