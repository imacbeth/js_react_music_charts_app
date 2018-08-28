import React from 'react';

const Song = function (props) {
  if (!props) return null;

  return (
    <div>
    <h3>{props.position}. {props.title.label} - {props.artist.label}</h3>
    <img src={props.image[2].label} alt="single artwork"></img>
  </div>
  );
}

export default Song;
