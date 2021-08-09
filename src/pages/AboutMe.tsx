import React from 'react';
import Image from 'next/image';
import avatar from '../../public/avatar.png';
import styles from './Aboutme.module.css';
import Header from '../components/Header';

const AboutMe = () => {
  return (
    <div>
      <Header />
      <div className={styles.head}>
        <Image
          className={styles.image}
          height="100px"
          width="100px"
          src={avatar}
          alt="Picture of the artist"
        />
        <div className={styles.name}>Yağmur Kabaoğlu</div>
        <div className={styles.text}>
          <p>
            I grew up with nature around me, on a small island in the south of
            Norway.
          </p>
          <p>
            Stone, trees and water gives me the inspiration to explore the
            elemental energy of clay as it is transformed into ceramics. The
            potential which resides inside every soft lump, just waiting to be
            shaped and manipulated into seemingly infinite forms and finishes of
            handmade ceramic art. It was the three-dimensional quality of clay
            which led me to study art & sculpture at Avni Institute of Art in
            Tel-Aviv in 1993.{' '}
          </p>
          <p>
            As an ceramic artist I have ever since been captivated by the
            enjoyment of creating custom made pottery with unique decorative
            beauty combined with functional simplicity.{' '}
          </p>
          <p>
            When I moved to Amsterdam in 2002,I immediately started up-new in
            the same spirit and found my studio inan artist complex. It gives me
            the greatest amount of pleasure in my work knowing that there are
            many people out there who enjoy using my pottery.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
