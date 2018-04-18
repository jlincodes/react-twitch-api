import React from 'react';

// import axios from 'axios';

class StreamsIndex extends React.Component {
  constructor() {
    super();
    this.state = { streams: [] };
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
