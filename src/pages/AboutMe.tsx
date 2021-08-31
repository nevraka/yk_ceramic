import React from 'react';
import Image from 'next/image';
import avatar from '../../public/avatar.png';
import Header from '../components/Header';

const AboutMe = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center p-3">
        <Image
          className="block p-5"
          height="100px"
          width="100px"
          src={avatar}
          alt="Picture of the artist"
        />
        <div className="text-2xl font-inital p-5">Yağmur Kabaoğlu</div>
        <div>
          <p className="text-left m-4 not-italic leading-7">
            I grew up a beatiful city Istanbul.
          </p>
          <p className="text-left m-4 not-italic leading-7">
            Stone, trees and water gives me the inspiration to explore the
            elemental energy of clay as it is transformed into ceramics. The
            potential which resides inside every soft lump, just waiting to be
            shaped and manipulated into seemingly infinite forms and finishes of
            handmade ceramic art. It was the three-dimensional quality of clay
            which led me to study art & sculpture
          </p>
          <p className="text-left m-4 not-italic leading-7">
            As an ceramic artist I have ever since been captivated by the
            enjoyment of creating custom made pottery with unique decorative
            beauty combined with functional simplicity.
          </p>
          <p className="text-left m-4 not-italic leading-7">
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
