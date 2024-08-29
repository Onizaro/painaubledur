import React, {useEffect} from 'react';


const Titre = () => {
    useEffect(() => {
        const heading = document.getElementById('titre');
        if (heading) {
          const text = heading.textContent;
          const wrappedText = text.split('').map((letter, index) => {
            if (letter === ' ') {
              return `<span style="--i:${index};">&nbsp;</span>`;
            }
            return `<span style="--i:${index};">${letter}</span>`;
          }).join('');
          heading.innerHTML = wrappedText;
        }
      }, []);
    return (
        <div>
            <h1 id="titre">PAIN  AU  BLE  DUR</h1>
        </div>
    );
};

export default Titre;