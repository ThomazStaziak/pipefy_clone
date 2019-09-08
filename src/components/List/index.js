import React from 'react';

import { MdAdd } from "react-icons/md";
import Card from '../Card';

import { Container } from './styles';

export default function List({ data, index: listIndex }) {
  return (
    <Container done={data.done}>
      <header>
        <h2>{data.title}</h2>
        { data.creatable && 
          <button type="submit">
            <MdAdd size={24} color="#fff" />
          </button>
        }
      </header>

      <ul>
        {data.cards.map((card, index) => (
          <Card 
            key={String(card.id)} 
            listIndex={listIndex}
            index={index} 
            data={card} 
          />
        ))}
      </ul>
    </Container>
  );
}
