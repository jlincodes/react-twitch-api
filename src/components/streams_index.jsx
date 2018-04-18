import React from 'react';
import config from '../config';

import axios from 'axios';

class StreamsIndex extends React.Component {
  constructor() {
    super();
    this.state = { streams: [] };
    this.fetchStreams = this.fetchStreams.bind(this);
  }

  componentWillMount() {
    this.fetchStreams();
  }

  fetchStreams() {
    const twitchApi = 'https://api.twitch.tv/kraken/streams/featured?&client_id=';
    const clientId = config.clientId;
    axios.get(twitchApi + clientId)
         .then(response => {
           console.log(response);
         })
         .catch(error => {
           console.log("error", error);
         });
  }

  render() {
    const streams = this.state.streams;

    if (streams.length <= 0) {
      return (
        <div>Loading...</div>
      );
    } else {
      return (
        <div className="streams-index">
          <h3>Streams</h3>
        </div>
      );
    }
  }
}

export default StreamsIndex;
