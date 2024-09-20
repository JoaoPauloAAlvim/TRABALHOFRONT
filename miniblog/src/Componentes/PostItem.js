import React from "react";
import styled from "styled-components";

const PostBlog = styled.div`
  display: flex;
  gap: 30px;
  padding: 0px;
  margin: 0px;
  background-color: #282c34;
  color: white;
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
      <containerPost key={post.id}>
        <PostBlog>
          <img style={imgPostStyle} src={post.imagem} alt={post.descricao} />
          <div>
            <h3>{post.titulo}</h3>
            <p> " {post.descricao} " </p>
          </div>
         </PostBlog> 
          <button onClick={() => onRemovePost(post.id)}>Deletar</button>
      </containerPost>
    ));

    return <div>{listagem}</div>;
  }
}
