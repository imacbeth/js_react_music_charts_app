import React from 'react';
import ChartList from '../components/ChartList.js';

class ChartContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: []
    }
  }


  componentDidMount() {
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json'
    fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((songs) => {
      this.setState({songs: songs.feed.entry})
    })
  }

  render(){
    return (
      <div>
        <h1>UK Top 20 Singles</h1>
        <ChartList songs={this.state.songs}/>
      </div>
    );
  }
}

export default ChartContainer;
