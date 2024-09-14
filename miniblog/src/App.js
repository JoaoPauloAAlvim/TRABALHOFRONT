import React from 'react';
import Header from './Componentes/Header';
import PostForm from './Componentes/PostForm';
import PostItem from './Componentes/PostItem';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <PostForm></PostForm>
      <PostItem></PostItem>
    </div>
  );
}

export default App;

