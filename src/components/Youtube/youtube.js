import React from 'react';
import './youtube.css';

const YoutubeEmbed = ({ titleYoutube, embedId }) => {
  return (
    <div className="quadro-youtube">
      <p className="moradas-youtube-home"> 
        {titleYoutube}
      </p>
    
    <div className="section">
    <div className="videoResponsive">
      <iframe
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
      <p className="msg-after-youtube">
            Partiu Férias ! ! !
          </p>
      </div>
      </div>
    </div>
    
  );
};

export default YoutubeEmbed;
