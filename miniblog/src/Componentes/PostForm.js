// import React from "react";
// import styled from "styled-components";

// const Formulario = styled.div`  // Alterei para um seletor válido
//   background-color: red;
//   padding: 20px;
//   display: flex;
//   flex-direction: column;
//   gap: 10px;
// `;

// export default class PostForm extends React.Component {
//   state = {
//     titulo: "",
//     descricao: "",
//     imagem: "",
//     posts: []
//   };

//   onChangeTitulo = (event) => {
//     this.setState({ titulo: event.target.value });
//   };

//   onChangeDescricao = (event) => {
//     this.setState({ descricao: event.target.value });
//   };

//   onChangeImagem = (event) => {
//     this.setState({ imagem: event.target.value });
//   };

//   adicionarPost = () => {
//     let titulo= this.state.titulo;
//     let descricao = this.state.descricao;
//     let imagem = this.state.imagem || "https://copilot.microsoft.com/images/create/quando-alguem-nao-colocar-uma-imagem-no-meu-imput-/1-66e5d40db6e6463f929973236a4286d6?id=%2fzPoBoa%2bJQ%2fwqmQXX%2fmK1w%3d%3d&view=detailv2&idpp=genimg&idpclose=1&thId=OIG4.De0JXDhVWzlHUqaVkVTU&skey=H7srwskiLk25M2JpVeLA5vJ6DXO_8p7LrIMt3YhhZP4&FORM=SYDBIC"; 
//     let id = Math.random();
//     const novoPost = [...this.state.posts,{ titulo: titulo, descricao: descricao,imagem:imagem, id: id },]
//     this.setState({posts:novoPost});
//     this.setState({
//       titulo:"",
//       descricao:"",
//       imagem:"",
//     });
//   };
    

    
//   };

//   render() {
//     return (
//       <Formulario>
//         <input
//           type="text"
//           placeholder="Digite o título da sua postagem (máximo 50 caracteres)"
//           onChange={this.onChangeTitulo}
//           value={this.state.titulo}
//           name="titulo"
//         />
//         <input
//           type="text"
//           placeholder="Digite a descrição do seu post"
//           onChange={this.onChangeDescricao}
//           value={this.state.descricao}
//           name="descricao"
//         />
//         <input
//           type="text"
//           placeholder="Digite a URL da sua imagem (opcional)"
//           onChange={this.onChangeImagem}
//           value={this.state.imagem}
//           name="imagem"
//         />
//         <button onClick={this.adicionarPost}>Postar</button>
//       </Formulario>
//     );
// };


import React from "react";
import styled from "styled-components";

const Formulario = styled.div`
  background-color: red;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default class PostForm extends React.Component {
  state = {
    titulo: "",
    descricao: "",
    imagem: "",
    posts: []
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

  adicionarPost = () => {
    let titulo = this.state.titulo;
    let descricao = this.state.descricao;
    let imagem = this.state.imagem || "https://copilot.microsoft.com/images/create/quando-alguem-nao-colocar-uma-imagem-no-meu-imput-/1-66e5d40db6e6463f929973236a4286d6?id=%2fzPoBoa%2bJQ%2fwqmQXX%2fmK1w%3d%3d&view=detailv2&idpp=genimg&idpclose=1&thId=OIG4.De0JXDhVWzlHUqaVkVTU&skey=H7srwskiLk25M2JpVeLA5vJ6DXO_8p7LrIMt3YhhZP4&FORM=SYDBIC"; 
    let id = Math.random();

    // Correção: Agora o estado de posts está sendo atualizado corretamente.
    const novoPost = [
      ...this.state.posts,
      { titulo: titulo, descricao: descricao, imagem: imagem, id: id }
    ];

    this.setState({
      posts: novoPost,
      titulo: "",
      descricao: "",
      imagem: "",
    });
  };

  render() {
    return (
      <Formulario>
        <input
          type="text"
          placeholder="Digite o título da sua postagem (máximo 50 caracteres)"
          onChange={this.onChangeTitulo}
          value={this.state.titulo}
          name="titulo"
        />
        <input
          type="text"
          placeholder="Digite a descrição do seu post"
          onChange={this.onChangeDescricao}
          value={this.state.descricao}
          name="descricao"
        />
        <input
          type="text"
          placeholder="Digite a URL da sua imagem (opcional)"
          onChange={this.onChangeImagem}
          value={this.state.imagem}
          name="imagem"
        />
        <button onClick={this.adicionarPost}>Postar</button>
      </Formulario>
    );
  }
}
