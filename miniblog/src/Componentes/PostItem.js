import React from "react";
import styled from "styled-components";

const PostBlog = styled.div`
  display: flex;
  padding: 0px;
  margin: 0px;
  background-color: none;
  border: 1px solid black;
  margin-bottom: 10px;
`;

const imgPostStyle = {
  padding: '0px',
  margin: '0px',
  width: '40%'
}

export default class PostItem extends React.Component {
  render() {
    const { posts, onRemovePost } = this.props;

    const listagem = posts.map((post) => (
      <div key={post.id}>
        <PostBlog>
          <img style={imgPostStyle} src={post.imagem} alt={post.descricao} />
          <div>
            <p>{post.titulo}</p>
            <p>{post.descricao}</p>
          </div>
         </PostBlog> 
          <button onClick={() => onRemovePost(post.id)}>Deletar</button>
      </div>
    ));

    return <div>{listagem}</div>;
  }
}
