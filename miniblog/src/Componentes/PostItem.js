import React from "react";
import styled from "styled-components";

export default class PostItem extends React.Component{
    state = {
        posts:[
            {titulo:"",descricao:"",imagem:"",id:Math.random()}
        ],
        titulo:"",
        descricao:"",
        imagem:"",
      };
      removerPost = (id) => {
        const novaListaDePosts = [...this.state.posts];
        const postagens = copiaDaLista.filter((post) => {
          return id !== post.id;
        });
        this.setState({ posts: postagens });
      };
    render(){
        let listagem = this.state.posts.map((post) => {
        return<>
            <div key={post.id}>
                <p titulo={post.titulo}></p>
                <p descricao={post.descricao}></p>
                <img imagem={post.imagem}/>
                <button
                    onClick={() => {
                        this.removerPost(post.id);
                    }}
                >
                Deletar
                </button>
            </div>
        </>
        });
    }
}
