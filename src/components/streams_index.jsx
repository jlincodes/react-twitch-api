import React from 'react';
import config from '../config';
import StreamsIndexItem from './streams_index_item';

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
           this.setState({ streams: response.data.featured });
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
          <table>
            <tr>
              <th>Preview:</th>
              <th>Stream:</th>
              <th>Currently Stream:</th>
            </tr>
            {streams.map( (stream, idx) => (
              <StreamsIndexItem key={idx} stream={stream} />
            ))}
          </table>
        </div>
      );
    }
  }
}

export default StreamsIndex;
