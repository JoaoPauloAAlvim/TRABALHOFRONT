import React from "react";
import styled from "styled-components";

const Formulario = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 10px;
`;

const FormularioInputDescricao = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0px 0px 15px 15px',
  borderRadius: '10px',
  height: '80px',
  width: '40%',
  border: '1px solid black',
  resize: 'none',
  whiteSpace: 'pre-wrap',
  overflowWrap: 'break-word',
  wordWrap: 'break-word'
}

const FormularioInput = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0px 0px 15px 15px',
  borderRadius: '10px',
  height: '50px',
  width: '40%',
  border: '1px solid black'
}

const buttonPost = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '30px',
  width: '250px',
  backgroundColor: '#282c34',
  borderRadius: '10px',
  color: '#FFFFFF',
}

export default class PostForm extends React.Component {
  state = {
    titulo: "",
    descricao: "",
    imagem: "",
  };

  onChangeTitulo = (event) => {
    this.setState({ titulo: event.target.value });
  };

  onChangeDescricao = (event) => {
    this.setState({ descricao: event.target.value });
  };

  onChangeImagem = (event) => {
    this.setState({ imagem: event.target.value });
  };

   verificarURL = (url) => {
    const regex = /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg|webp))$/i;
    return regex.test(url);
  };

  adicionarPost = () => {
    const { titulo, descricao, imagem } = this.state;
    const postImagem = imagem || "https://www.shutterstock.com/shutterstock/videos/3430844685/thumb/1.jpg?ip=x480";
    const id = Math.random();
    if(!titulo || !descricao){
      alert("Existem campos faltando");

      this.setState({
        titulo: "",
        descricao: "",
        imagem: "",
      });
    }
    else if(imagem){
      this.verificarURL(imagem)
      alert("URL inválida");

      this.setState({
        titulo: "",
        descricao: "",
        imagem: "",
      });
    }
    else{
    const novoPost = { titulo, descricao, imagem: postImagem, id };
    this.props.onAddPost(novoPost);
    
    this.setState({
      titulo: "",
      descricao: "",
      imagem: "",
    });
  }
  };
  
  render() {
    return (
      <Formulario>
        <textarea
          style={FormularioInput}
          type="text"
          placeholder="Título (máximo 50 caracteres)"
          onChange={this.onChangeTitulo}
          value={this.state.titulo}
          name="titulo"
        />
        <textarea
          style={FormularioInputDescricao}
          type="text"
          placeholder=" Descrição "
          onChange={this.onChangeDescricao}
          value={this.state.descricao}
          name="descricao"
        />
        <textarea
          style={FormularioInput}
          type="text"
          placeholder="URL da sua imagem (opcional)"
          onChange={this.onChangeImagem}
          value={this.state.imagem}
          name="imagem"
        />
        <button style= {buttonPost} onClick={this.adicionarPost}>Postar</button>
      </Formulario>
    );
  }
}
