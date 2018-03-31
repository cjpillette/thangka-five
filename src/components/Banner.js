import React from 'react';

import Aux from 'hoc/Aux';
import Logo from 'components/ui/Logo';

const banner = () => {
  return (
    <section>
      <video id="background-video" autoPlay style={{width: '100%', height: '100%'}} >
        <source src="http://www.parapente05.com/video-home.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        <p>Vous désirez avoir la sensation de glisser harmonieusement dans les airs, d’entendre le vent murmurer dans vos oreilles, de découvrir le paysage autrement, d’être libre de la gravité...</p>

        <p>Leonardo Da Vinci en rêvait déjà, aujourd’hui c’est une aventure accessible à tous. En biplace ou sous forme de stage avec un apprentissage rapide, à la fois sûr et efficace, adapté à chaque individu, le parapente vous ouvre la porte du monde magique du vol libre.</p>  
    </section>
  )
}

export default banner;