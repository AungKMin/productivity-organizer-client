import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

import img1 from '../images/img-1.jpg';
import img2 from '../images/img-2.jpg';
import img3 from '../images/img-3.jpg';
import img4 from '../images/img-4.jpg';
import img5 from '../images/img-5.jpg';

function Cards() {
  return (
    <div className='cards'>
      <h1>Features</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={img1}
              text='Make detailed notes using a robust text editor'
              label='Feature'
            />
            <CardItem
              src={img2}
              text='Find your notes quickly by searching titles and tags'
              label='Feature'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={img3}
              text='Keep organized by using tags'
              label='Feature'
            />
            <CardItem
              src={img4}
              text='Add quick notes by commenting on your notes'
              label='Feature'
            />
            <CardItem
              src={img5}
              text='Prioritize by starring your notes'
              label='Feature'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
