import React from 'react';
import PropTypes from 'prop-types';
//import styled from 'styled-components/macro';

import { formatDuration } from '../util';

const TrackItem = ({track}, key) => {
  return (
    <div>
      <li className="track__item" >
        <div className="track__item__num"> </div>
        <div className="track__item__title-group">
          <div className="track__item__name-artist">
            <div className="track__item__name overflow-ellipsis">
              {track.name}
            </div>
            <div className="track__item__artist overflow-ellipsis">
              {track.artists.map((artist, key) => (
                <span key={key}>
                  {artist.name}
                  {key !== track.artists.length - 1 && ", "}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="track__item__album overflow-ellipsis">
          {track.album.name}
        </div>
        <div className="track__item__duration">
          {formatDuration(track.duration_ms)}
        </div>
      </li>
    </div>
  );
}

TrackItem.propTypes = {
  track: PropTypes.object.isRequired,
};

export default TrackItem;