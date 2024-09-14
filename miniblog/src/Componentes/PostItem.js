import React from "react";
import styled from "styled-components";

const PostBlog = styled.div`
  background-color: red;
  padding: 10px;
  margin-bottom: 10px;
`;

export default class PostItem extends React.Component {
  render() {
    const { posts, onRemovePost } = this.props;

    const listagem = posts.map((post) => (
      <PostBlog key={post.id}>
        <div>
          <p>{post.titulo}</p>
          <p>{post.descricao}</p>
          <img src={post.imagem} alt={post.descricao} />
          <button onClick={() => onRemovePost(post.id)}>Deletar</button>
        </div>
      </PostBlog>
    ));

    return <div>{listagem}</div>;
  }
}
