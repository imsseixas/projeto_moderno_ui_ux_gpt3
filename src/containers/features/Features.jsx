import React from 'react';
import Feature from '../../components/feature/Feature'
import './features.css';

const featuresData = [
{
  title: 'Melhorando as desconfianças',
  text: 'Melhorar as desconfianças finais pode instantaneamente ser aplaudido.'
},
{
  title: 'Torne-se uma pessoa ativa',
  text: 'A consideração de simpatizar é ocasionalmente incomum, mas não suficiente para oferecer assistência. A fim de se tornar ativo, permite-se ao GPT-3 responder de forma ativa.'
},
{
  title: 'Enviar mensagens',
  text: 'Deixe perguntar possível relação elegância amante comer também debater. Por mensagem ou sou nada entre principalmente abordar.'
},
{
  title: 'O prodígio da programação',
  text: 'um jovem talento na programação, impressiona a todos com sua habilidade excepcional. Com sua mente analítica e criatividade, ele desenvolve soluções inovadoras que simplificam processos complexos. Sua genialidade promete revolucionar o mundo da tecnologia.'
}
]

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
      <h1 className="gradient__text">O Futuro é agora e você só precisa perceber isso. Pise no Futuro Hoje & faça isso acontecer</h1>
      <p>Solicite acesso antecipado para iniciar</p>
      </div>
      <div className='gpt3__features-container'>
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index}/>
        ))}
      </div>
    </div>
  )
}

export default Features