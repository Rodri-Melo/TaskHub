import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Post from './pages/Post/Post';
import Edit from './pages/Edit/Edit';
import LerMais from './pages/Lermais/Lermais';
import Feed from './pages/Feed/Feed';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Feed />} />
        <Route path="/post" element={<Post />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/lermais/:id" element={<LerMais />} />
      </Routes>
    </Router>
  );
}

export default App;
