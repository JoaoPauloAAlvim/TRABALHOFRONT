import React, { Component } from "react";
import Header from "./Componentes/Header";
import PostForm from "./Componentes/PostForm";
import PostItem from "./Componentes/PostItem";

class App extends Component {
  state = {
    posts: [],
  };

  handleAddPost = (post) => {
    this.setState((prevState) => ({
      posts: [...prevState.posts, post],
    }));
  };

  handleRemovePost = (id) => {
    this.setState((prevState) => ({
      posts: prevState.posts.filter((post) => post.id !== id),
    }));
  };

  render() {
    return (
      <div className="App">
        <Header />
        <PostForm onAddPost={this.handleAddPost} />
        <PostItem posts={this.state.posts} onRemovePost={this.handleRemovePost} />
      </div>
    );
  }
}

export default App;
