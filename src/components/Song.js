import React from 'react';

const Song = function (props) {
  if (!props) return null;
  console.log(props);
  return (
    <div>
    <h3>{props.position}: {props.title.label}</h3>
    <h3>{props.artist.label}</h3>
    <img src={props.image[2].label} alt=""></img>
  </div>
  );
}

export default Song;
