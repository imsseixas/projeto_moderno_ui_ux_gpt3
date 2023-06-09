import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './import';
import './blog.css';

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">Muita coisa está acontecendo, <br /> Estamos blogando sobre isso.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="09 de junho, 2023" text="GPT-3 e Openai é o futuro. Vamos explorar como é?" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="09 de junho, 2023" text="GPT-3 e Openai é o futuro. Vamos explorar como é?" />
        <Article imgUrl={blog03} date="09 de junho, 2023" text="GPT-3 e Openai é o futuro. Vamos explorar como é?" />
        <Article imgUrl={blog04} date="09 de junho, 2023" text="GPT-3 e Openai é o futuro. Vamos explorar como é?" />
        <Article imgUrl={blog05} date="09 de junho, 2023" text="GPT-3 e Openai é o futuro. Vamos explorar como é?" />
      </div>
    </div>
  </div>
  )
}

export default Blog