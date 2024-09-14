
import React from "react";
import styled from "styled-components";

const PostBlog = styled.div`
  background-color: red;
  padding: 10px;
  margin-bottom: 10px;
`;

export default class PostItem extends React.Component {
  state = {
    posts: [
      { titulo: "Primeiro Post", descricao: "Descrição do post", imagem: "url_da_imagem", id: Math.random() },
    ],
    titulo: "",
    descricao: "",
    imagem: "",
  };

  removerPost = (id) => {
    const novaListaDePosts = this.state.posts.filter((post) => post.id !== id);
    this.setState({ posts: novaListaDePosts });
  };

  render() {
    let listagem = this.state.posts.map((post) => {
      return (
        <PostBlog key={post.id}>
          <div>
            <p>{post.titulo}</p>
            <p>{post.descricao}</p>
            <img src={post.imagem} alt={post.descricao} />
            <button
              onClick={() => {
                this.removerPost(post.id);
              }}
            >
              Deletar
            </button>
          </div>
        </PostBlog>
      );
    });

    return <div>{listagem}</div>;
  }
}
