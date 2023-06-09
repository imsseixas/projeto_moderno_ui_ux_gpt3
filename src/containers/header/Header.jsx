import React from 'react';
import './header.css';
import people from "../../assets/people.png"
import AI from "../../assets/ai.png"

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id = "home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">Vamos construir algo incrível com o Chat GPT-3 OpenAI</h1>
        <p>No entanto, qualquer acomodação para viagens pode ser desagradável. Não devemos subestimar a importância de exercitar nossos pensamentos e bênçãos. A maneira de se satisfazer está em encontrar alegria na transformação e no envolvimento com tudo ao nosso redor. Ao longo dos anos, vamos nos permitir evoluir e solicitar o que desejamos. Vamos construir algo verdadeiramente incrível com o Chat GPT-3 da Open AI.</p>
          <div className="gpt3__header-content__input">
            <input type="email" placeholder="Seu Melhor E-mail" ></input>
            <button type="button">vamos começar!</button>
          </div>

        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>1.600 pessoas solicitaram esse acesso nas últimas 24 horas</p>
        </div>
        </div>

        <div className="gpt3__header-image">
          <img src={AI} alt="ai" /> 
      </div>
    </div> 
  )
}

export default Header