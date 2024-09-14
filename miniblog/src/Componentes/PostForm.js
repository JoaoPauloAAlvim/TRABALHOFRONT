import React from "react";
import styled from "styled-components"

export default class PostForm extends React.Component {
  state = {
    posts:[
        {titulo:"",descricao:"",imagem:"",id:Math.random()}
    ],
    titulo:"",
    descricao:"",
    imagem:"",
  };
  onChangeTitulo = (event)=>{
    this.setState({ titulo: event.target.value })
  }
  onChangeDescricao = (event)=>{
    this.setState({ descricao: event.target.value })
  }
  onChangeImagem = (event)=>{
    this.setState({ imagem: event.target.value })
  }

  adicionarPost=()=>{
    let titulo= this.state.titulo;
    let descricao=this.state.descricao;
    let imagem= this.state.imagem || "https://copilot.microsoft.com/images/create/quando-alguem-nao-colocar-uma-imagem-no-meu-imput-/1-66e5d40db6e6463f929973236a4286d6?id=%2fzPoBoa%2bJQ%2fwqmQXX%2fmK1w%3d%3d&view=detailv2&idpp=genimg&idpclose=1&thId=OIG4.De0JXDhVWzlHUqaVkVTU&skey=H7srwskiLk25M2JpVeLA5vJ6DXO_8p7LrIMt3YhhZP4&FORM=SYDBIC";
    let id=Math.random();

    let posts =[...this.state.posts,
        { titulo: titulo, descricao: descricao, imagem: imagem,id:id },
    ];
    this.setState({posts:posts});
    this.setState({
        titulo: "",
        descricao: "",
        imagem:"",
      });
  }

  render() {
    return (
      <div>
        <input 
            type="text"
            placeholder="Digite o título da sua postagem (maximo 50 caracteres)" 
            onChange={this.onChangeTítulo}
            value={this.state.titulo}
            name="título"/>
        <input 
            type="text"
            placeholder="Digite a descrição do seu post" 
            onChange={this.onChangeDescricao}
            value={this.state.descricao}
            name="descrição"/>
        <input 
            type="text"
            placeholder="Digite a url da sua imagem (opcional)" 
            onChange={this.onChangeImagem}
            value={this.state.imagem}
            name="imagem"/>
        <button onClick={this.adicionarPost}>Postar</button>
      </div>
    );
  }
}
