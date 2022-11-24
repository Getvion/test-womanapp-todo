import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Header } from './components';
import { Main, Todo } from './pages';

export const App = () => (
  <>
    <Header />
    <div className='container'>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/todo/:id' element={<Todo />} />
      </Routes>
    </div>
  </>
);
