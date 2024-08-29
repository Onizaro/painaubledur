import React, { useRef, useEffect, useState } from 'react';
import Main from './Main.js';
import Text from './Text.js';

const Carte = (props) => {
  const cardRef = useRef(null); // Référence pour la carte

  // Fonction pour faire pivoter la carte en fonction de la position de la souris
  const rotateToMouse = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const bounds = card.getBoundingClientRect();
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const leftX = mouseX - bounds.x;
    const topY = mouseY - bounds.y;
    const center = {
      x: leftX - bounds.width / 2,
      y: topY - bounds.height / 2
    };

    // Appliquer les styles de transformation
    card.style.transform = `
      perspective(1000px)
      rotateX(${center.y / 20}deg)
      rotateY(${-center.x / 20}deg)
      scale3d(1.07, 1.07, 1.07)
    `;

    const glow = card.querySelector('.glow');
    if (glow) {
      glow.style.backgroundImage = `
        radial-gradient(
          circle at
          ${center.x * 2 + bounds.width / 2}px
          ${center.y * 2 + bounds.height / 2}px,
          #ffffff35 ,
          #0000000f 
        )
      `;
    }
  };


  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseEnter = () => {
      document.addEventListener('mousemove', rotateToMouse);
    };

    const handleMouseLeave = () => {
      document.removeEventListener('mousemove', rotateToMouse);
      if (card) {
        card.style.transform = '';
        const glow = card.querySelector('.glow');
        if (glow) glow.style.backgroundImage = '';
      }
    };

    // Ajouter les événements à la carte
    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    // Nettoyer les événements quand le composant est démonté
    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousemove', rotateToMouse);
    };
  }, []);

    return (
        <div className='carte card' ref={cardRef}>
            <div className="glow"></div>
            <Main nom={props.objet.nom} image={props.objet.image}/>
            <Text description={props.objet.description}/>
        </div>
    );
}

export default Carte;

/* effet de https://codepen.io/markmiro/pen/wbqMPa */
