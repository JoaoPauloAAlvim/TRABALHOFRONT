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


const containerPost = {
  display: 'flex',
  flexDirection: 'column',
  gap: '20px'
}

const PostTextos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
`;

const imgPostStyle = {
  padding: '0px',
  margin: '0px', 
  width: '40%'
}

const buttonPost = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '20px',
  width: '50px',
  backgroundColor: 'white',
  borderRadius: '3px',
  color: '#282c34',
  fontWeight: 'bold',
  fontSize: '10px',
  border: 'none'
}

const buttonPostModal = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '20px',
  width: '50px',
  backgroundColor: 'white',
  borderRadius: '3px',
  color: '#282c34',
  fontWeight: 'bold',
  fontSize: '10px',
  border: 'none'
}

export default class PostItem extends React.Component {
  render() {
    const { posts, onRemovePost } = this.props;

    const listagem = posts.map((post) => (
      <div key={post.id}>
        <PostBlog>
          <img style={imgPostStyle} src={post.imagem} alt={post.descricao} />
          <PostTextos>
            <h3>{post.titulo}</h3>
            <p> " {post.descricao} " </p> 
            <button style= {buttonPostModal} onClick={() => onRemovePost(post.id)}>Leia mais</button> 
            <button style= {buttonPost} onClick={() => onRemovePost(post.id)}>Deletar</button>
          </PostTextos>
         </PostBlog> 
         
      </div>
    ));

    return <div style={containerPost}>{listagem}</div>;
  }
}
