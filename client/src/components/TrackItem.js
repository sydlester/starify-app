import React from 'react';
import PropTypes from 'prop-types';
//import styled from 'styled-components/macro';

import { formatDuration } from '../util';

const TrackItem = ({track}, key) => {
  return (
    <tr className='track__item'>
        <td className="track__item__num">{"#"}</td>
        <td className="track__item__name">
            {track.name.toUpperCase()}
        </td>
        <td className="track__item__name">
            {track.artists.map((artist, key) => (
            <span key={key}>
            {artist.name.toUpperCase()}
            {key !== track.artists.length - 1 && ", "}
            </span>
            ))}
        </td>
        <td className="track__item__duration">
            {formatDuration(track.duration_ms)}
        </td>
    </tr>
  );
}

TrackItem.propTypes = {
  track: PropTypes.object.isRequired,
};

export default TrackItem;