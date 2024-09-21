import React, { useState } from "react";
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

const ContainnerDescription = {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px'
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

const buttonDelete = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '20px',
  width: '50px',
  backgroundColor: 'red',
  borderRadius: '1px',
  color: 'white',
  fontWeight: 'bold',
  fontSize: '10px',
  border: 'none'
}

const buttonModal = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '35px',
  width: '90px',
  backgroundColor: 'white',
  borderRadius: '3px',
  color: '#282c34',
  fontWeight: 'bold',
  fontSize: '10px',
  border: 'none'
}

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  color: black;
  padding: 20px;
  border-radius: 8px;
  width: 500px;
  text-align: center;
`;

export default function PostItem({ posts, onRemovePost }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const handleOpenModal = (description) => {
    setModalContent(description);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const listagem = posts.map((post) => (
    <div key={post.id}>
      <PostBlog>
        <img style={imgPostStyle} src={post.imagem} alt={post.descricao} />
        <PostTextos>
          <h3>{post.titulo}</h3>
          <div>
            <p style={ContainnerDescription}>
              {post.descricao.length > 50
                ? `${post.descricao.slice(0, 50)}...`
                : post.descricao}
              {post.descricao.length > 50 && (
                <button style={buttonModal} onClick={() => handleOpenModal(post.descricao)}>
                  Leia mais
                </button>
              )}
            </p>
          </div>
          <div>
            <button style={buttonDelete} onClick={() => onRemovePost(post.id)}>
              Deletar
            </button>
          </div>
        </PostTextos>
      </PostBlog>
    </div>
  ));

  return (
    <div style={containerPost}>
      {listagem}

      {modalVisible && (
        <ModalBackground onClick={handleCloseModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <h2>Descrição Completa</h2>
            <p>{modalContent}</p>
            <button onClick={handleCloseModal}>Fechar</button>
          </ModalContent>
        </ModalBackground>
      )}
    </div>
  );
}
