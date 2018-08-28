import React from 'react';
import Song from './Song.js'

const ChartList = (props) => {


  const songsComponents = props.songs.map((song, index) => {
      return (
        <Song position={index + 1} key={index}  title={song["im:name"]} artist={song["im:artist"]} image={song["im:image"]}/>
      );
    });

  return (
    <div className="chart-list">
      <ul>
      {songsComponents}
      </ul>
    </div>
  );
}


export default ChartList;
