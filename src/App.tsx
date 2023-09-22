import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {PostPage} from "./features/posts/pages/PostPage";
import {PostsPage} from "./features/posts/pages/PostsPage";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route index element={<PostsPage />} path="/" />
          <Route element={<PostPage />} path={`/post/:id`} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
