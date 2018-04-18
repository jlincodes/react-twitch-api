import React from 'react';

const StreamsIndexItem = (props) => {
  const stream = props.stream.stream;
  const imgUrl = stream.preview.medium;
  const url = stream.channel.url;
  const streamerName = stream.channel.name;
  const gameName = stream.game;

  return (
    <tr>
      <td>
        <a href={url}>
          <img src={imgUrl} alt="stream"/>
        </a>
      </td>
      <td><a href={url}>{streamerName}</a></td>
      <td>{gameName}</td>
    </tr>
  );
};

export default StreamsIndexItem;
