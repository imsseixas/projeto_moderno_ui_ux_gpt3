import React from 'react';
import './possibility.css';
import possibilityImage from "../../assets/possibility.png"

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
        <h4>Solicite acesso antecipado para iniciar</h4>
        <h1 className="gradient__text">As possibiliades estão além da nossa imaginação</h1>
        <p>No entanto, qualquer cama para viajar é uma indulgência desagradável. Não há pensamentos de exercícios abençoando tudo. A indulgência é a maneira de alegria, alteração barulhenta do apego. Ao longo dos anos, permitimos que a festa peça para encomendar.</p>
        <h4>Solicite acesso antecipado para iniciar</h4>
      </div>
    </div>
  )
}

export default Possibility